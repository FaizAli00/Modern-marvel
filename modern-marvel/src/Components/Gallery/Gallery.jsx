import React, { useState } from "react";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import Visionary from "../Visionary/Visionary";

const Gallery = () => {
  const galleryImages = [
    "/src/assets/galleryImages/gallery1.jpg",
    "/src/assets/galleryImages/gallery2.jpg",
    "/src/assets/galleryImages/gallery3.jpg",
    "/src/assets/galleryImages/gallery4.jpg",
    "/src/assets/galleryImages/gallery5.jpg",
    "/src/assets/galleryImages/gallery6.jpg",
    "/src/assets/galleryImages/gallery7.jpg",
    "/src/assets/galleryImages/gallery8.jpg",
    "/src/assets/galleryImages/gallery9.jpg",
    "/src/assets/galleryImages/gallery10.jpg",
    "/src/assets/galleryImages/gallery11.jpg",
    "/src/assets/galleryImages/gallery12.jpg",
    "/src/assets/galleryImages/gallery13.jpg",
    "/src/assets/galleryImages/gallery14.jpg",
    "/src/assets/galleryImages/gallery15.jpg",
    "/src/assets/galleryImages/gallery16.jpg",
    "/src/assets/galleryImages/gallery17.jpg",
    "/src/assets/galleryImages/gallery18.jpg",
    "/src/assets/galleryImages/gallery19.jpg",
    "/src/assets/galleryImages/gallery20.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <>
      <div className="flex flex-col md:flex-row items-center bg-white px-4 md:px-6 py-10 mt-[100px]">
        <div className="w-full md:w-1/3 text-center md:text-left md:pr-4 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-[130px] font-thin font-CanelaTrial leading-tight md:leading-[130px] text-customGray">
            OUR{" "}
          </h2>
          <span className="block md:inline pl-0 md:pl-20 text-customGray text-2xl md:text-6xl font-thin font-CanelaTrial leading-tight md:leading-[60px]">
            GALLERY
          </span>
          <div className="flex pl-28 justify-center md:justify-start mt-10 md:mt-32 space-x-4">
            <button
              onClick={handlePrev}
              className="px-6 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 flex items-center"
            >
              <GrFormPreviousLink />
              <span className="ml-2">Prev</span>
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 flex items-center"
            >
              <span className="mr-2">Next</span>
              <GrFormNextLink />
            </button>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <img
            src={galleryImages[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            className="w-full h-auto md:h-[500px] object-cover rounded-md shadow-lg"
          />
        </div>
      </div>

      <Visionary />
    </>
  );
};

export default Gallery;
