import React from "react";
import logo from "../../assets/logo/group.svg";

const Navbar = () => {
  return (
    <>
      <nav className="absolute top-[25px] left-0 w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-[70px] text-white">
        <div className="text-xs md:text-sm leading-[14px] font-GTAmericaTrial font-medium underline underline-offset-2 mb-4 md:mb-0">
          NADER@DLBRUGS.COM
        </div>

        <div className="flex justify-center mb-4 md:mb-0">
          <img
            src={logo}
            alt="Modern Marvel Logo"
            className="h-[50px] lg:w-[220px] md:w-32 md:h-10 lg:h-16 object-contain"
          />
        </div>

        <div className="text-xs md:text-sm font-GTAmericaTrial font-medium">
          917-660-4697
        </div>
      </nav>
    </>
  );
};

export default Navbar;
