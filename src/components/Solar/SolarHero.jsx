import React from 'react'
import Image from 'next/image'

const SolarHero = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img/corporate/supporthero.jpg"
          alt="Solar Energy Solutions"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-white max-w-3xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
            Sustainable 
            <span className="text-orange-500 block">Solar Solutions</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-gray-200">
            Harness the power of the sun with our cutting-edge solar lighting and energy solutions. 
            Clean, efficient, and sustainable technology for a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Explore Solar Products
            </button>
            
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div> */}
    </div>
  )
}

export default SolarHero
