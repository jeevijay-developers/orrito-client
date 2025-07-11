'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute z-10 left-4 top-4/6 transform -translate-y-1/2 bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
      >
        <FaChevronLeft size={18} />
      </button>
      <button
        ref={nextRef}
        className="absolute z-10 right-4 top-4/6 transform -translate-y-1/2 bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
      >
        <FaChevronRight size={18} />
      </button>

      {/* Swiper with Autoplay + Navigation */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="w-full"
      >
        {[1, 2, 3, 4].map((num) => (
          <SwiperSlide key={num}>
            <div className="relative w-full overflow-hidden h-[60vh] md:h-[85vh]">
              <Image
                src={`/img/corporate/${num}.jpg`}
                alt={`Corporate Image ${num}`}
                fill
                className=" object-center"
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

export default Hero;
