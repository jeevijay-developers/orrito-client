import ProductCategoryPage from '@/components/Products/ProductCategoryPage'
import React from 'react'

const page = async ({ params }) => {
  const {category} = await params;

  return (
    <ProductCategoryPage category={category} />
  );
}

export default page;