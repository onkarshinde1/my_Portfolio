import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-10 sm:pb-16 md:pb-20 py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div> */}

      {/* Frontend Skills - Responsive gap and spacing */}
      <div className="flex flex-row justify-center sm:justify-around flex-wrap mt-3 sm:mt-4 gap-3 sm:gap-4 md:gap-5 items-center w-full max-w-7xl">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* Backend Skills - Responsive gap and spacing */}
      <div className="flex flex-row justify-center sm:justify-around flex-wrap mt-3 sm:mt-4 gap-3 sm:gap-4 md:gap-5 items-center w-full max-w-7xl">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* Full Stack Skills - Responsive gap and spacing */}
      <div className="flex flex-row justify-center sm:justify-around flex-wrap mt-3 sm:mt-4 gap-3 sm:gap-4 md:gap-5 items-center w-full max-w-7xl">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* Other Skills - Responsive gap and spacing */}
      <div className="flex flex-row justify-center sm:justify-around flex-wrap mt-3 sm:mt-4 gap-3 sm:gap-4 md:gap-5 items-center w-full max-w-7xl">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* Background Video - Responsive */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;