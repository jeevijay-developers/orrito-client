'use client'
import React from 'react'
import { RocketLaunchIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/outline'

const MissionVisionValue = () => {
  const cards = [
    {
      title: 'Our Mission',
      icon: RocketLaunchIcon,
      description: 'What drives us every day',
      points: [
        'Develop energy-efficient LED solutions that reduce carbon footprint',
        'Make quality lighting accessible and affordable for everyone',
        'Innovate continuously to stay ahead of industry standards',
        'Provide exceptional lighting experiences for all spaces',
        'Support sustainable practices throughout our supply chain'
      ],
      color: 'from-[#F16831] to-[#F16831]/80'
    },
    {
      title: 'Our Vision',
      icon: EyeIcon,
      description: 'Where we aim to be',
      points: [
        'Be recognized globally as the leader in LED lighting innovation',
        'Create lighting ecosystems that enhance quality of life',
        'Achieve carbon neutrality across our entire operation by 2030',
        'Establish the industry benchmark for lighting efficiency and quality',
        'Transform how people experience and interact with light'
      ],
      color: 'from-[#F16831]/90 to-[#F16831]/70'
    },
    {
      title: 'Our Values',
      icon: HeartIcon,
      description: 'What we believe in',
      points: [
        'Innovation: We embrace creativity and forward thinking',
        'Sustainability: We prioritize environmentally responsible choices',
        'Quality: We never compromise on excellence in our products',
        'Integrity: We operate with honesty and transparency',
        'Collaboration: We believe in the power of teamwork and partnerships'
      ],
      color: 'from-[#F16831]/80 to-[#F16831]/60'
    }
  ]

  return (
    <section className="py-16 bg-[#FFEBE2]/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#F16831] to-[#F16831] bg-clip-text text-transparent">
          Our Mission, Vision & Values
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${card.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                  <card.icon className="h-8 w-8" />
                </div>
                <p className="mt-2 text-white/80">{card.description}</p>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <ul className="space-y-3">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-[#F16831] mt-2 mr-3"></div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionVisionValue
