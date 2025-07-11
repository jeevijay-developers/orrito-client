import SolarCategoryPage from '@/components/Solar/SolarCategoryPage'
import React from 'react'

const page = ({ params }) => {
  const category = params.category;

  return (
    <SolarCategoryPage category={category} />
  )
}

export default page
