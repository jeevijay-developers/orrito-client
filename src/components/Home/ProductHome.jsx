"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { productCategories as fetchProductCategories } from "../../service/Data";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

const ProductHome = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const data = await fetchProductCategories();
        console.log("Fetched product categories:", data);

        setCategories(Array.isArray(data) ? data : []);
      } catch (err) {
        setCategories([]);
      }
    }
    getCategories();
  }, []);
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
                  <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-orange-50 flex items-center justify-center mb-3 shadow-sm overflow-hidden">
                    <img
                      src={
                        cat.image?.url ||
                        cat.img ||
                        cat.src ||
                        "/img/corporate/placeholder.png"
                      }
                      alt={cat.name}
                      className="w-full h-full object-cover rounded-full cursor-pointer transition-transform duration-200 hover:scale-105 "
                    />
                  </div>
                  <span className="text-gray-700 font-medium text-lg text-center whitespace-nowrap">
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
