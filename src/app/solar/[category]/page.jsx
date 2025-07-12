import SolarCategoryPage from '@/components/Solar/SolarCategoryPage'
import React from 'react'

const page = ({ params }) => {
  const id = params.id;

  return (
    <SolarCategoryPage id={id} />
  )
}

export default page
