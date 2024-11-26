import React from "react";
import logo from "../../assets/logo/logo.png"; // Import the logo

const Footer = () => {
  return (
    <footer className="bg-customGray text-white py-6 md:px-12 lg:px-[70px] flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-4 lg:gap-0">
      <div className="text-center md:text-left">
        <h3 className="text-sm font-GTAmericaTrial font-medium md:text-xl leading-[14px] lg:mt-4 md:mt-10">
          THE MODERN MARVEL
        </h3>
        <p className="text-sm font-GTAmericaTrial leading-[14px] font-normal md:text-base mb-4 md:mb-[40px]">
          139 Arrandale Avenue, 
          <br />
          Great Neck, NY 11024
        </p>
        <p className="text-[10px] font-normal leading-3 font-GTAmericaTrial md:text-base">
          FAIR HOUSING & EQUAL OPPORTUNITY
        </p>
      </div>

      <div className="flex flex-col items-center lg:mt-[40px] sm:mt-6 md:mt-4">
        <img
          src={logo}
          alt="Modern Marvel Logo"
          className="w-[150px] md:w-[220px] h-[40px] md:h-[50px] mb-4 md:mb-6"
        />
        <p className="text-[10px] md:text-xs whitespace-nowrap mt-6 font-normal text-center">
          2024 THE MODERN MARVEL. ALL RIGHTS RESERVED
        </p>
      </div>

      <div className="text-center md:text-right sm:mt-6 lg:mt-6 md:mt-4">
        <p className="text-sm leading-[14px] font-GTAmericaTrial font-normal mb-2">
          NADER@DLBRUGS.COM
        </p>
        <p className="text-sm font-GTAmericaTrial font-normal leading-[14px] mb-4">
          917-660-4697
        </p>
        <div className="mt-[40px] md:mt-[60px] lg:mt-[80px]">
          <p className="text-sm font-GTAmericaTrial font-normal leading-3">
            LEGAL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
