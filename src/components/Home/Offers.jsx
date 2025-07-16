"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useQuery } from "@/context/QueryContext";
import { getAllProducts } from "@/service/Data";

const Offers = () => {
  const { addToQuery, queryItems, updateQuantity, deleteQuery } = useQuery();
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Check if item is in query
  const checkQuery = (id) => {
    return queryItems.some(item => item.id === id);
  };

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

                    <h3 className="text-sm font-bold text-gray-800 mb-3  transition-colors duration-300">
                      {offer.name}
                    </h3>

                    {/* Features */}
                    {/* <ul className="mb-4 space-y-1">
                      {offer.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-gray-600 flex items-center"
                        >
                          <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul> */}

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span
                          className="text-lg font-bold " 
                          style={{ color: "#313841" }}
                        >
                          ₹{offer.offerPrice}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {checkQuery(offer.id) ? (
                        <div className="flex-1 flex items-center justify-between border border-gray-200 rounded-lg">
                          <button
                            className="px-3 py-2 text-gray-600 hover:text-orange-500 transition-colors"
                            onClick={() => {
                              const item = queryItems.find(item => item.id === offer.id);
                              if (item && item.quantity > 1) {
                                updateQuantity(offer.id, item.quantity - 1);
                              } else {
                                deleteQuery(offer.id);
                              }
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                          
                          <span className="text-gray-800 font-medium">
                            {queryItems.find(item => item.id === offer.id)?.quantity || 0}
                          </span>
                          
                          <button
                            className="px-3 py-2 text-gray-600 hover:text-orange-500 transition-colors"
                            onClick={() => {
                              const item = queryItems.find(item => item.id === offer.id);
                              if (item) {
                                updateQuantity(offer.id, item.quantity + 1);
                              }
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                          
                          <button 
                            className="px-3 py-2 text-gray-600 hover:text-red-500 transition-colors"
                            onClick={() => deleteQuery(offer.id)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      ) : (
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
                          Add to Cart
                        </button>
                      )}
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

export default Offers;
