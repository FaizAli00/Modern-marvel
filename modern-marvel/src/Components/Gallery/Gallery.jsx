import React, { useState, useEffect } from "react";
import Visionary from "../Visionary/Visionary";
import arrownext from "../../assets/images/Arrownext.png";
import arrowprev from "../../assets/images/Arrowprev.png";
import line2 from "../../assets/images/line2.png";

const Gallery = () => {
  const galleryImages = [
    "/galleryImages/img1.jpg",
    "/galleryImages/img2.jpg",
    "/galleryImages/img3.jpg",
    "/galleryImages/img4.jpg",
    "/galleryImages/img5.jpg",
    "/galleryImages/img6.jpg",
    "/galleryImages/img7.jpg",
    "/galleryImages/img8.jpg",
    "/galleryImages/img9.jpg",
    "/galleryImages/img10.jpg",
    "/galleryImages/img11.jpg",
    "/galleryImages/img12.jpg",
    "/galleryImages/img13.jpg",
    "/galleryImages/img14.jpg",
    "/galleryImages/img15.jpg",
    "/galleryImages/img16.jpg",
    "/galleryImages/img17.jpg",
    "/galleryImages/img18.jpg",
    "/galleryImages/img19.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-[30px] items-center bg-white px-4 md:px-6 py-10 lg:mt-[100px] md:mb-12">
        <div className="w-full md:w-1/3 text-center md:text-left md:pr-4 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-[130px] font-thin font-CanelaTrial leading-tight md:leading-[130px] text-customGray">
            OUR{" "}
          </h2>
          <span className="block md:inline pl-0 md:pl-20 text-customGray text-2xl md:text-6xl font-thin font-CanelaTrial leading-tight md:leading-[60px]">
            GALLERY
          </span>
          <div className="flex gap-2 md:pl-32 md:gap-[10px] justify-center md:justify-start items-center md:mt-32 md:w-[138px] h-4 space-x-2 md:space-x-4">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center px-2 py-1 text-customVision bg-white gap-1"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "0px",
                gap: "5px",
                width: "68px",
                height: "14px",
                flex: "none",
                order: 0,
                flexGrow: 0,
              }}
            >
              <img src={arrowprev} alt="" />
              <span className="text-sm text-customVision italic font-normal font-AdobeGaramondPro">
                Previous
              </span>
            </button>

            <img src={line2} alt="" className="hidden md:block" />

            <button
              onClick={handleNext}
              className="flex items-center justify-center px-2 py-1 w-14 bg-white gap-1"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "0px",
                gap: "5px",
                width: "50px",
                height: "14px",
                flex: "none",
                order: 2,
                flexGrow: 0,
              }}
            >
              <span className="text-sm text-customVision italic font-normal font-AdobeGaramondPro">
                Next
              </span>
              <img src={arrownext} alt="" />
            </button>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <img
            src={galleryImages[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            className={` lg:w-[750px] lg:h-[540px] md:h-[400px] md:w-[500px] object-cover shadow-lg transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={handleImageLoad}
          />
        </div>
      </div>

      <Visionary />
    </>
  );
};

export default Gallery;
