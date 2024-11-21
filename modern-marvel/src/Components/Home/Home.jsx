import React from "react";
import Navbar from "../Navbar/Navbar";
import listingPhoto from "../../assets/images/listingphoto1.png";
import { FiArrowDown } from "react-icons/fi"; // Import an arrow icon from react-icons

const Home = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${listingPhoto})`,
      }}
    >
      <Navbar />

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-0 mb-[270px]">
        <h2 className="text-3xl md:text-6xl leading-tight md:leading-[62px] font-thin font-CanelaTrial lg:w-[755px]">
          WHERE HISTORY <br /> MEETS MODERN LUXURY
        </h2>
        <p className="text-base md:text-lg leading-snug md:leading-[22px] max-w-full md:max-w-xl font-GTAmericaTrial mt-4">
          A sanctuary of timeless elegance, crafted to elevate your everyday life
        </p>
      </div>

      {/* Down Arrow Button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button
          className="p-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 text-customGray transition-all duration-300"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          aria-label="Scroll Down"
        >
          <FiArrowDown className="text-xl md:text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Home;
