import React from "react";
import listingphoto2 from "../../assets/images/listingphoto2.png";
import listingphoto3 from "../../assets/images/listingphoto3.png";
import line1 from "../../assets/images/line1.png";
import icons from "../../assets/images/icons.png";
import listingphoto4 from "../../assets/images/listingphoto4.png";
import listingphoto5 from "../../assets/images/listingphoto5.png";
import listingphoto6 from "../../assets/images/listingphoto6.png";
import Gallery from "../Gallery/Gallery";

const Vision = () => {
  return (
    <>
      <div className="px-6 py-10 bg-white">
        {" "}
        <h2 className="text-3xl md:text-6xl leading-tight md:leading-[60px] text-customGray font-thin font-CanelaTrial text-center mb-6">
          {" "}
          DISCOVER THE VISION BEHIND <br /> THE MODERN MARVEL{" "}
        </h2>{" "}
        <div className="flex justify-center">
          {" "}
          <iframe
            className="w-full md:w-[1140px] h-[240px] md:h-[640px]"
            src="https://www.youtube.com/embed/lScK1J-gusM?si=oMw-Axd5Bk2neOR5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>{" "}
        </div>{" "}
      </div>

      <div className="flex flex-col md:flex-row justify-around mt-10 space-y-6 md:space-y-0">
        <div className="md:w-1/2 px-4 md:px-0">
          <p className="text-customVision text-sm md:text-medium font-normal leading-relaxed">
            139 Arrandale Avenue is where classic elegance meets modern{" "}
            <br className="hidden md:block" />
            comfort. This exceptional home offers timeless architecture in one{" "}
            <br className="hidden md:block" />
            of Great Neck’s most desirable neighborhoods, designed for those{" "}
            <br className="hidden md:block" />
            who value sophistication and serenity. Step into a life of luxury{" "}
            <br className="hidden md:block" />
            with expansive living spaces, top-tier amenities, and an unbeatable
            location.
          </p>
        </div>
        <div className="text-center md:text-left font-thin font-CanelaTrial text-6xl md:text-9xl">
          <h1 className="text-customVision">FIND</h1>
          <h1 className="md:pl-12 text-customGray">YOUR</h1>
          <h1 className="text-customVision">SPACE</h1>
        </div>
      </div>

      <div className="px-[70px] mt-[100px]">
        <img src={listingphoto2} alt="" />
      </div>

      <div className="px-6 md:px-16 lg:px-[70px] mt-10 md:mt-16 lg:mt-[100px] py-10 bg-white flex flex-col-reverse lg:flex-row justify-center lg:justify-end items-center gap-10 lg:gap-[41px]">
  <div className="lg:w-1/2">
    <p className="text-[20px] md:text-[25px] lg:text-[30px] leading-7 md:leading-8 lg:leading-9 text-center lg:text-right text-customVision font-normal font-AdobeGaramondPro max-w-xl mx-auto mb-6 lg:mb-8">
      “Homes like this <br className="hidden lg:block" /> don’t exist in Kings <br className="hidden lg:block" />
      Point. I wanted to be <br className="hidden lg:block" /> a pioneer and build <br className="hidden lg:block" />
      something spectacular <br className="hidden lg:block" /> and modern in a <br className="hidden lg:block" />
      traditional town”
    </p>
    <div className="text-center lg:text-right">
      <h2 className="text-customGray font-thin font-CanelaTrial mb-2 flex items-center justify-center lg:justify-end">
        <img
          src={line1}
          alt=""
          className="inline-block w-16 md:w-20 align-middle mr-2"
        />
        Nader Bolour
      </h2>
      <p className="text-customGray font-light">
        owner of Doris Leslie Blau
      </p>
    </div>
  </div>
  <div className="lg:w-1/2 flex justify-center">
    <img
      src={listingphoto3}
      alt="Find Your Space"
      className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-auto object-cover"
    />
  </div>
</div>


      <div>
        <img src={listingphoto4} className=" w-full" alt="" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-[60px] mt-10 md:mt-16 lg:mt-[100px]">
  <div className="w-full md:w-1/2">
    <img 
      src={listingphoto5} 
      alt="Home Interior" 
      className="w-full max-w-sm md:max-w-md lg:max-w-full object-cover" 
    />
  </div>
  <div className="text-xs md:text-sm font-normal text-customVision font-AdobeGaramondPro leading-5 md:leading-6 lg:leading-7 max-w-lg mx-auto md:mx-0">
    <p>
      Inspired by the charm of Great Neck’s architectural <br className="hidden md:block" />
      heritage, every room is crafted to harmonize style <br className="hidden md:block" />
      and functionality. Natural light pours into spacious <br className="hidden md:block" />
      rooms, highlighting high-end finishes and <br className="hidden md:block" />
      thoughtful details that make this house truly feel <br className="hidden md:block" />
      like home. From the elegant molding to the <br className="hidden md:block" />
      carefully selected materials, each element is designed <br className="hidden md:block" />
      to create a warm and inviting atmosphere, perfect <br className="hidden md:block" />
      for both quiet family moments and sophisticated <br className="hidden md:block" />
      gatherings.
    </p>
  </div>
</div>


<div className="flex flex-col lg:flex-row justify-center mt-10 md:mt-16 lg:mt-[100px] gap-10 md:gap-12 lg:gap-16 items-center">
  <div className="w-full lg:w-1/2">
    <img 
      src={listingphoto6} 
      alt="Modern Glass Construction" 
      className="w-full max-w-md md:max-w-lg lg:max-w-full h-auto object-cover" 
    />
  </div>
  <div className="flex flex-col gap-8 md:gap-10 lg:gap-[60px] mt-10 lg:mt-20 font-AdobeGaramondPro font-normal leading-6 md:leading-7 lg:leading-8 text-sm md:text-base text-customVision">
    <p className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
      This brand-new modern all glass construction in the <br className="hidden md:block" /> 
      prestigious Village of Kings Point is a masterpiece of <br className="hidden md:block" /> 
      luxury and cutting-edge design. This pristine <br className="hidden md:block" /> 
      property offers expansive living spaces, top-of-the- <br className="hidden md:block" /> 
      line finishes, and a seamless connection between <br className="hidden md:block" /> 
      indoor and outdoor living, making it an ideal retreat <br className="hidden md:block" /> 
      for those who value both style and function. The <br className="hidden md:block" /> 
      living room and dining room are open spaces <br className="hidden md:block" /> 
      flooded with natural light, offering incredible views <br className="hidden md:block" /> 
      of the surrounding property and pool area. The <br className="hidden md:block" /> 
      rooms are perfect for hosting guests in a modern and <br className="hidden md:block" /> 
      sophisticated environment. The state-of-the-art <br className="hidden md:block" /> 
      kitchen is a chef's dream, equipped with the latest <br className="hidden md:block" /> 
      high-end appliances, sleek cabinetry, and ample <br className="hidden md:block" /> 
      counter space plus another auxiliary kitchen.
    </p>
    <img 
      src={icons} 
      alt="Icons" 
      className="w-16 md:w-[276px] lg:w-[276px] mx-auto lg:mx-0" 
    />
  </div>
</div>


      <Gallery />
    </>
  );
};

export default Vision;
