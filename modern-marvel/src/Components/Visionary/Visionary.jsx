import React from "react";
import visionaryImage from "../../assets/images/visionary.png";
import Inquire from "../Inquire/Inquire";

const Visionary = () => {
  return (
    <> 
      <div className=" lg:mt-[100px] px-6 md:px-12 lg:px-[70px]">
        <div className=" pl-28 md:pr-16">
          <h1 className="text-customVision font-thin font-CanelaTrial sm:leading-[60px] md:leading-[100px] lg:leading-[130px] text-4xl sm:text-3xl md:text-6xl lg:text-[130px] md:pl-24 lg:pl-44 text-center lg:text-left">
            MEET
          </h1>
          <h1 className="text-4xl relative sm:text-3xl md:text-6xl lg:text-[130px] font-thin leading-[70px] sm:leading-[50px] md:leading-[100px] lg:leading-[130px] text-customGray text-center lg:text-left">
            <span className="text-3xl md:text-4xl lg:text-6xl italic font-thin font-CanelaTrial text-customGray">
              the
            </span>{" "}
            <span className=" relative sm:top-0 lg:top-8 font-CanelaTrial font-thin">VISION</span> <span className=" font-thin absolute sm:top-0 lg:top-8 z-10 font-CanelaTrial">ARY</span>
          </h1>
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row lg:items-end lg:gap-[60px] px-4 md:px-8 lg:px-0">
  {/* Text Section */}
  <div className="w-full lg:w-1/2 text-sm md:text-base font-AdobeGaramondPro font-thin md:leading-6 lg:leading-7 text-customVision text-center lg:text-right">
    <p className=" md:mt-8">
      Nader Bolour, a prominent figure in luxury{" "}
      <br className="hidden sm:block" />
      and antique carpets, grew up in a family of rug{" "}
      <br className="hidden sm:block" />
      experts, gaining early insights into the trade in{" "}
      <br className="hidden sm:block" />
      Iran and later in London. In 1997, he acquired{" "}
      <br className="hidden sm:block" />
      the Doris Leslie Blau Gallery in New York,{" "}
      <br className="hidden sm:block" /> transforming it into a top
      destination for <br className="hidden sm:block" />
      bespoke and antique rugs. <br className="hidden sm:block" />
      Bolour’s clients include Jerry Seinfeld, Jeff{" "}
      <br className="hidden sm:block" />
      Bezos, Lady Gaga, Tommy Hilfiger, John{" "}
      <br className="hidden sm:block" />
      Legend, Madonna, and Michael J. Fox, along{" "}
      <br className="hidden sm:block" />
      with top architects like Peter Marino. Known{" "}
      <br className="hidden sm:block" />
      for blending traditional craftsmanship with{" "}
      <br className="hidden sm:block" />
      modern design, Bolour collaborates with elite{" "}
      <br className="hidden sm:block" />
      designers, making his rugs a central element in{" "}
      <br className="hidden sm:block" />
      high-end interiors.
    </p>
  </div>

  {/* Image Section */}
  <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
    <img
      src={visionaryImage}
      alt="Visionary"
      className="w-[570px] max-w-sm md:max-w-md lg:max-w-full h-auto object-cover"
    />
  </div>
</div>

      </div>

      <Inquire />
    </>
  );
};

export default Visionary;
