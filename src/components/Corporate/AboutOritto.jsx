'use client'
import React from 'react'

const AboutOritto = () => {
  // Timeline data - placeholder data that you can modify later
  const timelineData = [
    {
      year: '2018',
      title: 'Smart Lighting Innovation',
      description: 'Introduced our first line of smart LED lighting systems with mobile app control and voice assistant compatibility.'
    },
    {
      year: '2021',
      title: 'Sustainable Manufacturing',
      description: 'Achieved 100% renewable energy usage in our manufacturing facilities and implemented zero-waste packaging.'
    },
    {
      year: '2024',
      title: 'Global Presence',
      description: 'Expanded to international markets with distribution centers in Europe, Asia, and North America.'
    },
    {
      year: '2025',
      title: 'Next Generation Technology',
      description: 'Launched revolutionary nano-LED technology with unprecedented energy efficiency and brightness levels.'
    }
  ];

  return (
    <div className="mt-10 py-16">
      <div className="container mx-auto px-4">
        {/* About Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F16831] to-[#F16831] bg-clip-text text-transparent">
            About Oritto
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Illuminating lives since 2010 with innovative LED lighting solutions for homes, businesses, and special occasions.
          </p>
        </div>

        {/* Company Description */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 max-w-4xl mx-auto border-l-8 border-[#F16831]">
          <h3 className="text-2xl font-bold mb-4 text-[#F16831]">Our Story</h3>
          <p className="text-gray-700 mb-6">
            Oritto began as a small workshop with a big dream: to transform how people experience light in their daily lives. 
            Founded by a team of engineers passionate about energy efficiency and design, we've grown from crafting decorative 
            home lighting to developing comprehensive lighting solutions for various environments and occasions.
          </p>
          <p className="text-gray-700">
            Today, we're proud to be at the forefront of LED technology innovation, combining cutting-edge research with 
            aesthetic excellence. Our products not only illuminate spaces but create atmospheres, enhance moods, and reduce 
            environmental impact through energy-efficient designs.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="w-[70vw] mx-auto relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#F16831] via-[#FFEBE2] to-[#F16831]"></div>

          {/* Timeline events */}
          <div className="space-y-32 md:space-y-48">
            {timelineData.map((event, index) => (
              <div key={index} className="relative min-h-[100px] md:min-h-[120px] md:mb-16">
                {/* Year marker - visible on mobile and desktop */}
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-[#F16831] text-white font-bold py-2 px-4 rounded-full shadow-lg mb-4 md:mb-0 w-20 text-center mx-auto z-10">
                  {event.year}
                </div>

                {/* Content box - alternating left/right on desktop */}
                <div className={`md:w-5/12 bg-white p-6 rounded-lg shadow-md border-t-4 border-[#F16831] relative md:mt-8 ${
                  index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'
                }`}>
                  {/* Triangle pointer for desktop */}
                  <div className={`hidden md:block absolute top-4 ${
                    index % 2 === 0 ? 'right-[-10px] border-l-[#F16831]' : 'left-[-10px] border-r-[#F16831]'
                  } w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ${
                    index % 2 === 0 ? 'border-l-[10px]' : 'border-r-[10px]'
                  }`}></div>

                  <h3 className="text-xl font-bold text-[#F16831] mb-2">{event.title}</h3>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision for the future */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#F16831] to-[#F16831] bg-clip-text text-transparent">
            Illuminating the Future
          </h3>
          <p className="text-gray-700">
            As we continue our journey, Oritto remains committed to pushing the boundaries of LED technology. 
            Our research team is constantly developing new ways to enhance light quality, energy efficiency, 
            and smart integration capabilities. We envision a future where sustainable lighting solutions are 
            accessible to everyone, contributing to a brighter, more energy-efficient world.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutOritto
