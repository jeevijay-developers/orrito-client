"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { getAllProducts } from "@/service/Data";
import ProductCard from "./ProductCard";
import ProductCard2 from "./ProductCard2";

const Offers2 = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await getAllProducts();
        const products = response.data || response; // Handle both response.data and direct array

        // Transform API data to offers format
        const transformedOffers = products.map((product, index) => ({
          id: product._id,
          name: product.name,
          category: product.categoryName?.[0] || "LED Products",
          image: product.images?.[0]?.url || "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  
          offerPrice: product.price,
          features: product.highlights || ["Energy Efficient", "Long Lasting", "Warranty"],
          slug: product.slug
        }));

        setOffers(transformedOffers);
      } catch (error) {
        console.error('Failed to load offers:', error);
        // Fallback to empty array or keep static data
        setOffers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Best Seller":
        return "bg-green-500";
      case "Limited Time":
        return "bg-red-500";
      case "New Arrival":
        return "bg-blue-500";
      case "Hot Deal":
        return "bg-orange-500";
      case "Professional":
        return "bg-purple-500";
      case "Premium":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Special <span className="text-orange-500">Offers</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing deals on premium LED lighting solutions. Limited
            time offers on our best-selling products!
          </p>
        </div>

        {/* Offers Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={12}
            slidesPerView={2}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            //   bulletActiveClass:
            //     "swiper-pagination-bullet-active bg-orange-500",
            // }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="offers-swiper pb-12"
          >
            {offers.map((offer, index) => (
              <SwiperSlide key={offer.id}>
                <ProductCard2 product={offer} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !text-white !w-10 !h-10 !mt-0 !left-0 !top-1/2 !transform !-translate-y-1/2 bg-black/80 !rounded-full !shadow-lg  hover:!text-white !transition-all !duration-300"></div>
          <div className="swiper-button-next !text-white !w-10 !h-10 !mt-0 !right-0 !top-1/2 !transform !-translate-y-1/2 bg-black/80 !rounded-full !shadow-lg  hover:!text-white !transition-all !duration-300"></div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <button
            className="text-white px-8 py-3 hover:cursor-pointer rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{
              backgroundColor: "#313841",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#2a3038")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#313841")}
          >
            View All Products
          </button>
        </div> */}
      </div>

      <style jsx global>{`
        .offers-swiper .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
        }
        .offers-swiper .swiper-pagination-bullet-active {
          background: #f97316 !important;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 18px;
          font-weight: bold;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Offers2;
