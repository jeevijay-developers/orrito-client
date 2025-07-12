import React from 'react'
import Image from 'next/image'

const SupportHero = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] md:w-full overflow-hidden mt-30">
      <Image
        src="/img/corporate/supporthero.jpg"
        alt="Support Hero"
        fill
        className=" object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset- bg-opacity-40 top-40 left-2 md:top-70 md:left-20 flex items-center justify-center">
        <div className="text-center text-white text-2xl md:text-6xl ">
         <b> How Can We 
          <br />
         Help You ?</b>
        </div>
      </div>
    </div>
  )
}

export default SupportHero