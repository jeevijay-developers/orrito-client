import SolarCategoryPage from '@/components/Solar/SolarCategoryPage'
import React from 'react'

const page = ({ params }) => {
  const id = params.id;

  return (
    <div className='mt-48'>
      <SolarCategoryPage id={id} />
    </div>
  );
}

export default page
