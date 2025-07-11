import ProductByID from '@/components/Products/ProductByID'
import React from 'react'

const page = async ({ params }) => {
  const { slug } = await params;

  return (
    <ProductByID slug={slug} />
  )
}

export default page