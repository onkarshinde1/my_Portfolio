"use client";

import React, { Suspense, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random";

interface StarBackgroundProps {
  [key: string]: unknown;
}

const StarBackground = (props: StarBackgroundProps) => {
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, Math.PI / 4]);

  // Responsive star count based on screen size
  const sphere = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const starCount = isMobile ? 3000 : 5000; // Fewer stars on mobile for better performance
    const positions = new Float32Array(starCount * 3);
    inSphere(positions, { radius: 1.2 });
    return positions;
  }, []);

  useFrame((_, delta) => {
    setRotation(([x, y, z]) => [
      x - delta / 10,
      y - delta / 15,
      z
    ]);
  });

  // Responsive point size
  const pointSize = typeof window !== 'undefined' && window.innerWidth < 640 ? 0.0025 : 0.002;

  return (
    <group rotation={rotation}>
      <Points positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={pointSize}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-full sm:h-auto fixed inset-0 z-[20]">
    <Canvas 
      camera={{ position: [0, 0, 1] }}
      className="w-full h-full"
      dpr={typeof window !== 'undefined' && window.innerWidth < 768 ? [1, 1.5] : [1, 2]} // Lower DPR on mobile for performance
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;