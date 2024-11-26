import React from "react";
import Navbar from "../Navbar/Navbar";
import listingPhoto from "../../assets/images/listingphoto1.png";
import { FiArrowDown } from "react-icons/fi";

const Home = () => {
  return (
    <div
      className="relative h-[832px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${listingPhoto})`,
      }}
    >
      <Navbar />

      <div className="absolute bottom-[320px] inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-0">
        <h2 className="text-3xl md:text-6xl md:leading-[62px] font-thin font-CanelaTrial lg:w-[755px]">
          WHERE HISTORY <br /> MEETS MODERN LUXURY
        </h2>
        <p className="text-base md:text-[18px] w-full md:w-auto leading-5 md:leading-[22px] font-GTAmericaTrial mt-[20px]">
          A SANCTUARY OF TIMELESS ELEGANCE, CRAFTED TO ELEVATE YOUR EVERYDAY
          LIFE
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button
          className="p-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 text-customGray transition-all duration-300"
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
          aria-label="Scroll Down"
        >
          <FiArrowDown className="text-xl md:text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Home;
