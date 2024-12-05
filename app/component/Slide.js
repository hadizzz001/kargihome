"use client";

import { useState } from "react";

const BannerCarousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-8">
      {data && data.length > 0 ? (
        <>
          {/* Slider */}
          <div className="relative h-[600px] overflow-hidden">
            {data.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            {/* Navigation Buttons */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
              onClick={goToPrevious}
              aria-label="Previous Slide"
            >
              ❮
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
              onClick={goToNext}
              aria-label="Next Slide"
            >
              ❯
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center mt-4 space-x-4">
            {data.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover cursor-pointer rounded-md transition-transform ${
                  index === currentIndex ? "scale-110 border-4 border-blue-500" : "border"
                }`}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <h2 className="text-lg font-semibold text-gray-700">
            No data available
          </h2>
        </div>
      )}
    </div>
  );
};

export default BannerCarousel;
