"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/Motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="welcome-box flex items-center py-[8px] px-[7px] border border-[#b49bff] text-[#b49bff] opacity-[0.9] rounded-full"
      >
        <SparklesIcon className="mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
        <h1 className="Welcome-text text-xs sm:text-sm md:text-[15px]">
          Think best with next js 13
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] text-white font-medium mt-[10px] text-center mb-[15px] max-w-3xl"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        initial="hidden"
        animate="visible"
        className="text-base sm:text-lg md:text-xl lg:text-[20px] text-gray-200 mb-8 sm:mb-10 mt-[10px] text-center max-w-2xl"
        style={{ fontFamily: "cursive" }}
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;