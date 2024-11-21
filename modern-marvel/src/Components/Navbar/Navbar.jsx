import React from "react";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {

  return (
    <>
      <nav className="absolute top-[25px] left-0 w-full flex items-center px-4 md:px-[70px] justify-between text-white">
      <div className=" text-sm leading-[14px] font-GTAmericaTrial font-medium underline underline-offset-2">
        Nader@dlbrugs.com
      </div>

      <div className=" hidden sm:block">
        <img src={logo} alt="Modern Marvel Logo" className="h-[50.51px] object-contain" />
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-md underline underline-offset-2 font-medium">917-660-4697</span>
        <button className="px-4 py-2 bg-white text-customGray font-GTAmericaTrial text-sm font-medium rounded-md hover:bg-teal-600 hover:text-white">
          Inquire
        </button>
      </div>
    </nav>
    </>
    
  );
};

export default Navbar;
