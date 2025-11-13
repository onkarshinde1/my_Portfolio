import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 sm:p-6 md:p-8 lg:p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto max-w-7xl">
        {/* Main Content Grid - Responsive columns */}
        <div className="w-full h-full flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-around flex-wrap gap-8 sm:gap-6 md:gap-8 lg:gap-4">
          
          {/* Community Section */}
          <div className="w-full sm:min-w-[200px] sm:w-auto h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-base sm:text-lg md:text-[16px] mb-3 sm:mb-4">
              Community
            </div>
            <p className="flex flex-row items-center my-2 sm:my-[15px] cursor-pointer hover:text-purple-400 transition-colors duration-200">
              <FaYoutube className="text-lg sm:text-xl" />
              <span className="text-sm sm:text-[15px] ml-2 sm:ml-[6px]">YouTube</span>
            </p>
            <p className="flex flex-row items-center my-2 sm:my-[15px] cursor-pointer hover:text-purple-400 transition-colors duration-200">
              <FaGithub className="text-lg sm:text-xl" />
              <span className="text-sm sm:text-[15px] ml-2 sm:ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-2 sm:my-[15px] cursor-pointer hover:text-purple-400 transition-colors duration-200">
              <FaDiscord className="text-lg sm:text-xl" />
              <span className="text-sm sm:text-[15px] ml-2 sm:ml-[6px]">Discord</span>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="w-full sm:min-w-[200px] sm:w-auto h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-base sm:text-lg md:text-[16px] mb-3 sm:mb-4">
              Social Media
            </div>
            <p className="flex flex-row items-center my-2 sm:my-[15px] cursor-pointer hover:text-purple-400 transition-colors duration-200">
              <FaInstagram className="text-lg sm:text-xl" />
              <span className="text-sm sm:text-[15px] ml-2 sm:ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-2 sm:my-[15px] cursor-pointer hover:text-purple-400 transition-colors duration-200">
              <FaTwitter className="text-lg sm:text-xl" />
              <span className="text-sm sm:text-[15px] ml-2 sm:ml-[6px]">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-2 sm:my-[15px] cursor-pointer hover:text-purple-400 transition-colors duration-200">
              <FaLinkedin className="text-lg sm:text-xl" />
              <span className="text-sm sm:text-[15px] ml-2 sm:ml-[6px]">LinkedIn</span>
            </p>
          </div>

          {/* About Section */}
          <div className="w-full sm:min-w-[200px] sm:w-auto h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-base sm:text-lg md:text-[16px] mb-3 sm:mb-4">
              About
            </div>
            <p className="flex flex-row items-center my-2 sm:my-[15px] cursor-pointer hover:text-purple-400 transition-colors duration-200">
              <FaYoutube className="text-lg sm:text-xl" />
              <span className="text-sm sm:text-[15px] ml-2 sm:ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-2 sm:my-[15px] cursor-pointer hover:text-purple-400 transition-colors duration-200">
              <FaGithub className="text-lg sm:text-xl" />
              <span className="text-sm sm:text-[15px] ml-2 sm:ml-[6px]">Learning About Me</span>
            </p>
            <p className="flex flex-row items-center my-2 sm:my-[15px] cursor-pointer hover:text-purple-400 transition-colors duration-200 text-center sm:text-left">
              <FaDiscord className="text-lg sm:text-xl flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-[15px] ml-2 sm:ml-[6px] break-all sm:break-normal">
                onkarshinde499@gmail.com
              </span>
            </p>
          </div>
        </div>

        {/* Copyright Section - Responsive spacing and text */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mb-[20px] text-xs sm:text-sm md:text-[15px] text-center px-4">
          &copy; OMI UNIVERSE 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;