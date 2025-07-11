"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useQuery } from "@/context/QueryContext";

const Offers = () => {
  const { addToQuery } = useQuery();
  const offers = [
    {
      id: 1,
      name: "LED Bulb 9W",
      category: "Bulbs",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      originalPrice: 299,
      offerPrice: 199,
      discount: "33% OFF",
      features: ["Energy Efficient", "Long Lasting", "2 Year Warranty"],
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "LED Tube Light 18W",
      category: "Tube Lights",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      originalPrice: 599,
      offerPrice: 399,
      discount: "33% OFF",
      features: ["Cool White", "Flicker Free", "3 Year Warranty"],
      badge: "Limited Time",
    },
    {
      id: 3,
      name: "LED Panel Light 24W",
      category: "Panel Lights",
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      originalPrice: 899,
      offerPrice: 649,
      discount: "28% OFF",
      features: ["Slim Design", "Even Light", "5 Year Warranty"],
      badge: "New Arrival",
    },
    {
      id: 4,
      name: "LED Flood Light 50W",
      category: "Flood Lights",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      originalPrice: 1299,
      offerPrice: 899,
      discount: "31% OFF",
      features: ["Waterproof", "High Brightness", "3 Year Warranty"],
      badge: "Hot Deal",
    },
    {
      id: 5,
      name: "LED Street Light 30W",
      category: "Street Lights",
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      originalPrice: 1599,
      offerPrice: 1199,
      discount: "25% OFF",
      features: ["Weather Resistant", "Auto On/Off", "5 Year Warranty"],
      badge: "Professional",
    },
    {
      id: 6,
      name: "LED Downlight 12W",
      category: "Downlights",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      originalPrice: 499,
      offerPrice: 349,
      discount: "30% OFF",
      features: ["Recessed Design", "Dimmable", "3 Year Warranty"],
      badge: "Premium",
    },
  ];

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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Special <span className="text-orange-500">Offers</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing deals on premium LED lighting solutions. Limited
            time offers on our best-selling products!
          </p>
        </div>

        {/* Offers Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass:
                "swiper-pagination-bullet-active bg-orange-500",
            }}
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
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 h-full">
                  {/* Badge */}
                  <div
                    className={`absolute top-4 left-4 ${getBadgeColor(
                      offer.badge
                    )} text-white px-3 py-1 rounded-full text-xs font-bold z-10`}
                  >
                    {offer.badge}
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    {offer.discount}
                  </div>

                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs text-orange-500 font-semibold uppercase tracking-wide">
                        {offer.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3  transition-colors duration-300">
                      {offer.name}
                    </h3>

                    {/* Features */}
                    <ul className="mb-4 space-y-1">
                      {offer.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span
                          className="text-2xl font-bold"
                          style={{ color: "#313841" }}
                        >
                          ₹{offer.offerPrice}
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ₹{offer.originalPrice}
                        </span>
                      </div>
                      <div className="text-sm text-green-600 font-semibold">
                        Save ₹{offer.originalPrice - offer.offerPrice}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        className="flex-1 cursor-pointer text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                        style={{ backgroundColor: "#313841" }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#2a3038")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "#313841")
                        }
                        onClick={() => addToQuery({ ...offer, quantity: 1 })}
                      >
                        Add to Query
                      </button>

                      {/* <button 
                          className="px-4 py-2 rounded-lg transition-all duration-300"
                          style={{ 
                            border: '1px solid #313841',
                            color: '#313841'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#313841'
                            e.target.style.color = 'white'
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent'
                            e.target.style.color = '#313841'
                          }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button> */}
                    </div>
                  </div>

                  {/* Glowing Border Effect */}
                  {/* <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/30 rounded-2xl transition-all duration-500"></div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !text-white !w-10 !h-10 !mt-0 !left-0 !top-1/2 !transform !-translate-y-1/2 bg-black/80 !rounded-full !shadow-lg  hover:!text-white !transition-all !duration-300"></div>
          <div className="swiper-button-next !text-white !w-10 !h-10 !mt-0 !right-0 !top-1/2 !transform !-translate-y-1/2 bg-black/80 !rounded-full !shadow-lg  hover:!text-white !transition-all !duration-300"></div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            className="text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{
              backgroundColor: "#313841",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#2a3038")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#313841")}
          >
            View All Products
          </button>
        </div>
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

export default Offers;
