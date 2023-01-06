import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import LandingPageLayout from '../../layouts/LandingPageLayout'
import { productsRepository } from '../../repository/products'

const DetailProduct = () => {
    const router = useRouter()
   
    // Router Query for Detail Product
    const {id} = router.query

    // Fetching Data
    const {data:detailProduct} = productsRepository.hooks.useDetailProduct(id)

  return (
    <div className='py-28'>
        <div className='max-w-screen-xl mx-auto h-screen flex items-center justify-center'>
            <div>
                <h1 className='text-center text-4xl font-bold text-background lg:text-5xl'>Detail Product ke - {detailProduct?.id}</h1>
            </div>
        </div>
    </div>
  )
}

export default DetailProduct

DetailProduct.getLayout = (page) => ( <LandingPageLayout title="Encrease - Detail Product" children={page} />)