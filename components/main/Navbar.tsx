import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-2 sm:px-[10px]">
        {/* Logo Section - Responsive sizing */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]"
          />

          <span className="font-bold ml-2 sm:ml-[10px] hidden md:block text-gray-300 text-sm lg:text-base">
            Onkar Shinde
          </span>
        </a>

        {/* Navigation Links - Responsive layout */}
        <div className="flex-1 max-w-[500px] h-full flex flex-row items-center justify-center md:justify-between md:mr-20 px-2 sm:px-4">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-3 sm:px-4 md:px-[20px] py-2 md:py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer text-xs sm:text-sm md:text-base hover:text-purple-400 transition-colors duration-200">
              About me
            </a>
            <a href="#skills" className="cursor-pointer text-xs sm:text-sm md:text-base hover:text-purple-400 transition-colors duration-200">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer text-xs sm:text-sm md:text-base hover:text-purple-400 transition-colors duration-200">
              Projects
            </a>
          </div>
        </div>

        {/* Social Icons - Responsive spacing and sizing */}
        <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="cursor-pointer hover:scale-110 transition-transform duration-200 w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;