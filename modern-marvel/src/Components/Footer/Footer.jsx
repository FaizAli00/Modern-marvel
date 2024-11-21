import React from "react";
import logo from "../../assets/logo/logo.png"; // Import the logo

const Footer = () => {
  return (
    <footer className="bg-customGray text-white py-6 px-4 md:px-12 lg:px-[70px] flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0">
      {/* Left Section */}
      <div className="text-center md:text-left">
        <h3 className="text-sm font-GTAmericaTrial font-medium md:text-xl leading-[14px] mt-4 md:mt-10">
          THE MODERN MARVEL
        </h3>
        <p className="text-sm font-GTAmericaTrial leading-[14px] font-normal md:text-base mb-4 md:mb-[59px]">
          139 Arrandale Avenue, <br />
          Great Neck, NY 11024
        </p>
        <p className="text-[10px] font-normal leading-3 font-GTAmericaTrial md:text-base">
          FAIR HOUSING & EQUAL OPPORTUNITY
        </p>
      </div>

      {/* Center Section */}
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="Modern Marvel Logo"
          className="w-[150px] md:w-[220px] h-[40px] md:h-[50px] mb-4 md:mb-10"
        />
        <p className="text-[10px] md:text-xs w-full md:w-[276px] leading-3 text-center">
          2024 THE MODERN MARVEL. ALL RIGHTS RESERVED
        </p>
      </div>

      {/* Right Section */}
      <div className="text-center md:text-right mt-10">
        <p className="text-sm leading-[14px] font-GTAmericaTrial font-normal mb-2">
          Nader@dlbrugs.com
        </p>
        <p className="text-sm font-GTAmericaTrial font-normal leading-[14px] mb-4">
          917-660-4697
        </p>
        <div className=" mt-[73px]">
        <p className="text-sm font-GTAmericaTrial font-normal leading-3">
          LEGAL
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
