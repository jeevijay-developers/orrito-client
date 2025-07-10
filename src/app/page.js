import Hero from '@/components/Hero'

import ProductHome from '@/components/Home/ProductHome'
import SolutionHome from '@/components/Home/SolutionHome'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <ProductHome />
      <SolutionHome />
    </div>
  )
}

export default page