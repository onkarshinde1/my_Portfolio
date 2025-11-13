"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/Motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 mt-20 sm:mt-28 md:mt-32 lg:mt-40 w-full z-[20] gap-8 md:gap-4"
    >
      {/* LEFT SIDE */}
      <div className="h-full w-full flex flex-col gap-4 sm:gap-5 justify-center m-auto text-center md:text-start">
        {/* Small Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="welcome-box flex items-center justify-center md:justify-start py-[8px] px-[7px] text-[#b49bff] opacity-[0.9] mx-auto md:mx-0"
        >
          <SparklesIcon className="mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
          <h1 className="Welcome-text text-xs sm:text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto"
        >
          <span>
          Providing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            the best
          </span>{" "}
          project experience
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-4 sm:my-5 max-w-full md:max-w-[600px] px-4 md:px-0"
        >
          I&apos;m a Fullstack Software Engineer with experience in website,
          mobile, and software development. Check out my projects and skills.
        </motion.p>

        {/* Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-4 sm:py-2 sm:px-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto md:mx-0 hover:scale-105 transition-transform text-sm sm:text-base"
        >
          Learn More!
        </motion.a>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center max-w-md md:max-w-full"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;