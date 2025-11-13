"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/Motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full px-4 sm:px-6 md:px-8">
      
      <div className="absolute w-auto h-auto top-4 sm:top-8 md:top-12 lg:top-16 z-[5] px-4">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-30px] sm:translate-y-[-40px] md:translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center justify-center group cursor-pointer pt-16 sm:pt-20 md:pt-25 w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock Top"
            width={50}
            height={50}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px] translate-y-4 sm:translate-y-5 transition-all duration-200 group-hover:translate-y-8 sm:group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px] z-10"
          />
        </div>
        
        <div className="welcome-box px-3 py-2 sm:px-4 sm:py-2 md:px-[15px] md:py-[4px] z-[20] my-4 sm:my-5 md:my-[20px] opacity-[0.9]">
          <h1 className="welcome-text text-white text-sm sm:text-base md:text-lg lg:text-[16px]">
            Encryption
          </h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-[10px] px-4 sm:px-6 md:px-8 lg:px-[5px] w-full">
        <div className="cursive text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-medium text-center text-gray-300 max-w-2xl mx-auto">
          Secure your data with end-to-end Encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute inset-0">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover sm:object-contain"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;