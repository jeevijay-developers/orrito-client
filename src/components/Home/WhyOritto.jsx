"use client";
import React from 'react'

const WhyOrrito = () => {
  const features = [
    {
      icon: "🔧",
      title: "Backward Integration",
      description: "Inhouse Manufacturing with Complete Quality & Cost Control, On Time Delivery and Experienced Team with decades of experience"
    },
    {
      icon: "🔬",
      title: "Innovative R&D",
      description: "Continuous improvement & New Designs with cutting-edge technology and advanced research capabilities for future solutions"
    },
    {
      icon: "👥",
      title: "Customer Centric Approach",
      description: "Reliable Products with exceptional service, ability to meet growing customer needs and simplified warranty management process"
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description: "Commitment to energy Efficient Solutions strategically located at Central India for ON Time deliveries and Lesser Lead times"
    }
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-yellow-500 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Why Choose <span className="text-orange-500 animate-pulse">Orrito</span>?
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto rounded-full animate-pulse"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our competitive advantages that make Orrito the leading choice in LED lighting solutions
          </p>
        </div>

        {/* Features Grid with Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-lg hover:shadow-xl h-full flex flex-col"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: 'fadeInUp 0.8s ease-out forwards',
                minHeight: '280px'
              }}
            >
              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center flex flex-col h-full">
                <div className="text-4xl mb-4 group-hover:animate-bounce transition-all duration-300 filter drop-shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 flex-grow">
                  {feature.description}
                </p>
              </div>
              
              {/* LED Strip Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Compact Stats */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="group">
            <div className="text-2xl font-bold text-orange-500 mb-1 group-hover:scale-110 transition-transform duration-300">10K+</div>
            <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
          </div>
          <div className="group">
            <div className="text-2xl font-bold text-orange-500 mb-1 group-hover:scale-110 transition-transform duration-300">25+</div>
            <div className="text-sm text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="group">
            <div className="text-2xl font-bold text-orange-500 mb-1 group-hover:scale-110 transition-transform duration-300">5⭐</div>
            <div className="text-sm text-gray-600 font-medium">Quality Rating</div>
          </div>
        </div>
      </div>

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
    </section>
  )
}

export default WhyOrrito