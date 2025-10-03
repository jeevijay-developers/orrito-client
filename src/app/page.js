import Navbar from '@/components/Header/Navbar'
import TopBar from '@/components/Header/TopBar'
import Hero from '@/components/Hero'
import Gallery from '@/components/Home/Gallery'
import Offers from '@/components/Home/Offers'
import Offers2 from '@/components/Home/Offers2'
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
      <Offers2 />
      <OurClients />
      <Gallery />
    </div>
  )
}

export default page