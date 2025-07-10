'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';

const HeroCorporate = () => {
  return (
    <div style={{ width: '90vw', margin: '0 auto' }}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{ width: '100%' }}
      >
        {[1,2,3,4].map((num) => (
          <SwiperSlide key={num}>
            <div className='relative w-full aspect-[21/9] overflow-hidden'>
              <Image
              className='object-cover rounded-[12px]'
                src={`/img/corporate/${num}.jpg`}
                alt={`Corporate Image ${num}`}
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroCorporate