"use client";
import Image from 'next/image';
import React from 'react';

const WhyOrrito = () => {
  const features = [
    {
      icon: "/features/Expertise.svg", // You'll add your illustration here
      title: "Expertise",
      subtitle: "of 65+ years",
      description: "Decades of experience in LED lighting solutions"
    },
    {
      icon: "/features/innovation and design.svg", // You'll add your illustration here
      title: "Culture of",
      subtitle: "Innovation & Design",
      description: "Cutting-edge technology and creative solutions"
    },
    {
      icon: "/features/nationwide.svg", // You'll add your illustration here
      title: "Nationwide",
      subtitle: "Presence",
      description: "Serving customers across the entire country"
    },
    {
      icon: "/features/happy customer.svg", // You'll add your illustration here
      title: "20+ Crore",
      subtitle: "Happy Customers",
      description: "Trusted by millions of satisfied clients"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why Choose <span className="text-orange-600">Orrito</span>?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#e85a35] to-[#e9383b] mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container with Circular Background */}
              <div className="relative mb-6">
                <div className="w-22 h-22 md:w-30 md:h-30 rounded-full bg-gradient-to-br from-orange-600 to-yellow-500 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                  {/* Placeholder for illustration */}
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full flex items-center justify-center">
                    <Image src={feature.icon} alt={feature.title} width={100} height={100} className='rounded-full' />
                  </div>
                  {/* You can replace the above placeholder with: */}
                  {/* <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                  /> */}
                </div>
              </div>

              {/* Text Content */}
              <div className="">
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-base md:text-lg font-semibold text-gray-700">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOrrito;