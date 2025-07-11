import React from 'react'
import Image from 'next/image'

const SupportHero = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
      <Image
        src="/img/corporate/1.jpg"
        alt="Support Hero"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            How can I Help you?
          </h1>
        </div>
      </div>
    </div>
  )
}

export default SupportHero