import React from 'react'
import Image from 'next/image'

const SupportHero = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[85vh] md:w-full overflow-hidden">
      <Image
        src="/img/corporate/supporthero.jpg"
        alt="Support Hero"
        fill
        className="object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset- bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          
        </div>
      </div>
    </div>
  )
}

export default SupportHero