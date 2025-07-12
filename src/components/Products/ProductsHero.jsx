'use client'
import React from 'react'
import Image from 'next/image'

const ProductsHero = () => {
  return (
    <div className="relative w-full overflow-hidden h-[60vh] md:h-[80vh]">
      {/* Hero Banner Image */}
      <Image
        src="/img/corporate/1.jpg"
        alt="Products Hero Banner"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full text-orange-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Premium Products
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Innovative Products
            <span className="block text-orange-400 mt-1 sm:mt-2">Built for Excellence</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl md:max-w-3xl mx-auto text-gray-200 leading-relaxed px-2 sm:px-0">
            Discover our comprehensive range of high-quality lighting products designed to illuminate your world with style, efficiency, and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
              Explore Products
            </button>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsHero
