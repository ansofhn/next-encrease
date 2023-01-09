import { Tabs } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import Testimonials from '../../components/Testimonials'
import LandingPageLayout from '../../layouts/LandingPageLayout'
import { productsRepository } from '../../repository/products'

const DetailProduct = () => {
    const router = useRouter()
   
    // Router Query for Detail Product
    const {id} = router.query

    // Fetching Data
    const {data:detailProduct} = productsRepository.hooks.useDetailProduct(id)

    // Rupiah Formatter
    const rupiah = (number) =>{
      return new Intl.NumberFormat("id-ID",{
        style:"currency",
        currency:"IDR"
      }).format(number)
    }

  return (
    <div className='py-40 p-4 md:p-0'>
        <div className='max-w-screen-xl mx-auto h-screen flex items-center justify-center bg-red50'>
            <div className='flex flex-col gap-5 md:flex-row overflow-hidden'>
              <div className=''>
                <div className='w-full'>
                  <Image src={detailProduct?.image} width={400} height={400} alt={'product detail image'}/>
                </div>
              </div>
              <div className='w-[40re] flex flex-col gap-5'>
                <h1 className='text-2xl font-semibold md:text-3xl'>{detailProduct?.title}</h1>
                <h2 className='text-xl md:text-3xl'>{rupiah(detailProduct?.price)}</h2>
                <p>Type : {detailProduct?.type}</p>
                <div className='flex gap-5'>Quantity : <input min={1} defaultValue={1} type={'number'} className={'w-14 text-center border'} /></div>
                <div className='flex flex-row gap-x-5'>
                  <button className='bg-softGray px-4 py-2 hover:scale-105 duration-200'>Add to Cart</button>
                  <button className='bg-background text-softWhite px-4 py-2 hover:scale-105 duration-200'>Buy Now</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default DetailProduct

DetailProduct.getLayout = (page) => ( <LandingPageLayout title="Encrease - Detail Product" children={page} />)