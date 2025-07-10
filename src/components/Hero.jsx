'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full"
      >
    {[1, 2, 3, 4].map((num) => (
  <SwiperSlide key={num}>
    <div
      className="relative w-full overflow-hidden h-[60vh] md:h-[85vh]"
    >
      <Image
        src={`/img/corporate/${num}.jpg`}
        alt={`Corporate Image ${num}`}
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={num === 1}
      />
    </div>
  </SwiperSlide>
))}

      </Swiper>
    </div>
  )
}

export default Hero