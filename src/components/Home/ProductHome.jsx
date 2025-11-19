"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { productCategories as fetchProductCategories } from "../../service/Data";
import { Autoplay} from "swiper/modules";
import Link from "next/link";

const ProductHome = () => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   async function getCategories() {
  //     try {
  //       const data = await fetchProductCategories();
  //       console.log("Fetched product categories:", data);

  //       setCategories(Array.isArray(data) ? data : []);
  //     } catch (err) {
  //       setCategories([]);
  //     }
  //   }
  //   getCategories();
  // }, []);

  // Static data for now
  const categories = [
    {
      image: {
        url: '/categories/floodLight.png',
        public_id: 'products/fk35pxdnybjlxrnyfyya'
      },
      name: 'Flood Lights',
      products: [
        "683ffe52d7dc0b9ccea9bb35",
        "685f8fd368e2c0833d033fea",
        "685f901b0d17d6dcf96e6378",
        "686f5b2ee00da0c00dac2aa6",
        "6870d6fd78ae731f43906d2e"
      ]
    },
    {
      image: {
        url: '/categories/diwali.png',
        public_id: 'products/abc123'
      },
      name: 'Diwali lights',
      products: [
        "111111111111111111111111",
        "222222222222222222222222",
        "333333333333333333333333",
        "444444444444444444444444",
        "555555555555555555555555"
      ]
    },
    {
      image: {
        url: '/categories/led_bulb.png',
        public_id: 'products/def456'
      },
      name: 'LED Bulbs',
      products: [
        "666666666666666666666666",
        "777777777777777777777777",
        "888888888888888888888888",
        "999999999999999999999999",
        "000000000000000000000000"
      ]
    },
    {
      image: {
        url: '/categories/lamp.png',
        public_id: 'products/ghi789'
      },
      name: 'Bedroom lamps',
      products: [
        "aaaaaaaabbbbbbbbcccccccc",
        "ddddddddeeeeeeeefffffff",
        "gggggggghhhhhhhhiiiiiii",
        "jjjjjjjjkkkkkkkklllllll",
        "mmmmmmmmmnnnnnnnnoooooo"
      ]
    },
    {
      image: {
        url: '/categories/backlit_led.png',
        public_id: 'products/jkl012'
      },
      name: 'Backlit LEDs',
      products: [
        "ppppppppqqqqqqqqrrrrrrrr",
        "ssssssssttttttttuuuuuuuu",
        "vvvvvvvvwwwwwwwwxxxxxxxx",
        "yyyyyyyyzzzzzzzz11111111",
        "222222223333333344444444"
      ]
    }
  ];
  return (
    <section className="py-12">
      <h2 className="text-4xl font-light text-center mb-10 text-gray-800">
        Shop By Category
      </h2>
      <div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={6}
          slidesPerView={5}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            400: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          loop={true}
          className="category-swiper w-[26rem] md:w-2xl lg:w-4xl"
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat._id || cat.id || cat.name}>
              <Link
                href={`/products/${encodeURIComponent(cat.name)}`}
                className="block w-full h-full"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-4xl flex items-center justify-center mb-3 overflow-hidden">
                    <img
                      src={
                        cat.image?.url ||
                        cat.img ||
                        cat.src ||
                        "/img/corporate/placeholder.png"
                      }
                      alt={cat.name}
                      className="w-full h-full object-cover rounded-4xl cursor-pointer transition-transform duration-200 hover:scale-105 "
                    />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base lg:text-lg text-center whitespace-nowrap">
                    {cat.name}
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductHome;
