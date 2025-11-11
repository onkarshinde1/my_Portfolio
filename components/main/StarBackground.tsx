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

  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
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

  return (
    <group rotation={rotation}>
      <Points positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;