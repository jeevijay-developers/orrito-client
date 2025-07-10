"use client";
import React, { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    {
      id: 1,
      name: "LED Smart Bulb 12W",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      category: "Smart Lighting",
      size: "large"
    },
    {
      id: 2,
      name: "Vintage Edison Bulb",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=600&q=80",
      category: "Decorative",
      size: "medium"
    },
    {
      id: 3,
      name: "LED Panel Light 24W",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      category: "Panel Lights",
      size: "tall"
    },
    {
      id: 4,
      name: "RGB Color Bulb",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=600&q=80",
      category: "RGB Lighting",
      size: "small"
    },
    {
      id: 5,
      name: "LED Tube Light 18W",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      category: "Tube Lights",
      size: "wide"
    },
    {
      id: 6,
      name: "Flood Light 50W",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      category: "Outdoor",
      size: "medium"
    },
    {
      id: 7,
      name: "Industrial LED 36W",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
      category: "Industrial",
      size: "medium"
    }
  ]

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2 h-80'
      case 'tall':
        return 'col-span-1 row-span-2 h-80'
      case 'wide':
        return 'col-span-2 row-span-1 h-48'
      case 'medium':
        return 'col-span-1 row-span-1 h-48'
      case 'small':
        return 'col-span-1 row-span-1 h-36'
      default:
        return 'col-span-1 row-span-1 h-48'
    }
  }

  const openModal = (item) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-500">LED Gallery</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive collection of premium LED lighting solutions designed for every space and need.
            </p>
          </div>

          {/* Modern Mesh Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-min max-w-6xl mx-auto">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:z-10 ${getSizeClasses(item.size)}`}
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animation: 'fadeInUp 1s ease-out forwards'
                }}
                onClick={() => openModal(item)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/60 opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/60 rounded-2xl transition-all duration-500"></div>
                
                {/* Content with Modern Typography */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-orange-500/90 backdrop-blur-sm text-xs font-bold rounded-full mb-2 shadow-lg">
                      {item.category}
                    </span>
                    <h3 className="text-sm md:text-lg font-bold mb-1 group-hover:text-orange-300 transition-colors duration-300 leading-tight">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="md:flex">
              {/* Image */}
              <div className="md:w-2/3">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.name}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>

              {/* Details */}
              <div className="md:w-1/3 p-6">
                <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full mb-4">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedImage.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  Premium quality LED lighting solution designed for optimal performance and energy efficiency. 
                  Perfect for both residential and commercial applications.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Energy Efficient
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Long Lasting
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Warranty Included
                  </div>
                </div>
                <button 
                  className="w-full text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                  style={{ backgroundColor: '#313841' }}
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
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
    </>
  )
}

export default Gallery