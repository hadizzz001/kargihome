"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const ImageSwiper = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <div className="home___error-container">
        <h2 className="text-black text-xl font-bold">No data available</h2>
      </div>
    );
  }

  return (
    <Swiper
      spaceBetween={50}
      loop
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        stopOnLastSlide: false,
        reverseDirection: true,
      }}
    >
      {images.map((imageObj, imgIndex) => {
        const imageUrl = imageObj?.fields?.file?.url;

        return (
          imageUrl && (
            <SwiperSlide key={imgIndex} className="flex justify-center items-center">
              <img
                className="w-full h-full object-cover"
                src={`https:${imageUrl}`}
                alt={`Slide ${imgIndex + 1}`}
                style={{ width: '1200px', height: '500px' }}
              />
            </SwiperSlide>
          )
        );
      })}
    </Swiper>
  );
};

export default ImageSwiper;
