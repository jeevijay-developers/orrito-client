import ProductBySlug from '@/components/Products/ProductBySlug';
import React from 'react'

const page = async ({ params }) => {
  const { slug } = await params;

  return (
    <ProductBySlug slug={slug} />
  )
}

export default page