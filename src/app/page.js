import Hero from '@/components/Hero'
import Gallery from '@/components/Home/Gallery'
import Offers from '@/components/Home/Offers'
import OurClients from '@/components/Home/OurClients'

import ProductHome from '@/components/Home/ProductHome'
import SolutionHome from '@/components/Home/SolutionHome'
import WhyOritto from '@/components/Home/WhyOritto'
import React from 'react'

const page = () => {
  return (
    <div >
      <Hero />
      <ProductHome />
      <SolutionHome />
      <WhyOritto />
      <Offers />
      <OurClients />
      <Gallery />
    </div>
  )
}

export default page