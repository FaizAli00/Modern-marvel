import React from "react";
import visionaryImage from "../../assets/images/visionary.png";
import Inquire from "../Inquire/Inquire";

const Visionary = () => {
  return (
    <>
      <div className=" md:mt-16 lg:mt-[100px] px-6 md:px-12 lg:px-[70px]">
        {/* Heading Section */}
        <div>
          <h1 className="text-customVision font-thin font-CanelaTrial leading-[70px] md:leading-[100px] lg:leading-[130px] text-4xl md:text-6xl lg:text-[130px] md:pl-24 lg:pl-44 text-center lg:text-left">
            MEET
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-[130px] font-thin leading-[70px] md:leading-[100px] lg:leading-[130px] text-customGray text-center lg:text-left">
            <span className="text-3xl md:text-4xl lg:text-6xl italic font-thin font-CanelaTrial text-customGray">
              the
            </span>{" "}
            VISIONARY
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end  lg:gap-[60px]">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-sm md:text-base font-AdobeGaramondPro font-thin leading-5 md:leading-6 lg:leading-7 text-customVision text-center lg:text-right">
            <p>
              Nader Bolour, a prominent figure in luxury <br className="hidden md:block" /> 
              and antique carpets, grew up in a family of rug <br className="hidden md:block" /> 
              experts, gaining early insights into the trade in <br className="hidden md:block" /> 
              Iran and later in London. In 1997, he acquired <br className="hidden md:block" /> 
              the Doris Leslie Blau Gallery in New York, <br className="hidden md:block" />{" "}
              transforming it into a top destination for <br className="hidden md:block" /> 
              bespoke and antique rugs. <br className="hidden md:block" />
              Bolour’s clients include Jerry Seinfeld, Jeff <br className="hidden md:block" /> 
              Bezos, Lady Gaga, Tommy Hilfiger, John <br className="hidden md:block" /> 
              Legend, Madonna, and Michael J. Fox, along <br className="hidden md:block" /> 
              with top architects like Peter Marino. Known{" "}
              <br className="hidden md:block" /> 
              for blending traditional craftsmanship with <br className="hidden md:block" /> 
              modern design, Bolour collaborates with elite <br className="hidden md:block" /> 
              designers, making his rugs a central element in <br className="hidden md:block" /> 
              high-end interiors.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={visionaryImage}
              alt="Visionary"
              className="w-full max-w-sm md:max-w-md lg:max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Inquire Section */}
      <Inquire />
    </>
  );
};

export default Visionary;
