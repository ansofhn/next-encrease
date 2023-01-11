import { Tabs } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Testimonials from '../../components/Testimonials'
import LandingPageLayout from '../../layouts/LandingPageLayout'
import { productsRepository } from '../../repository/products'
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiFillPlusSquare,AiFillMinusSquare } from "react-icons/ai";

const DetailProduct = () => {
    const router = useRouter()
   
    const [quantity,setQuantity] = useState(1)

    const increaseQty = ()=>{
      setQuantity(quantity + 1)
    }

    const decreaseQty = ()=>{
      if(quantity > 1){
        setQuantity(quantity - 1)
      }
    }

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
    <div className='py-40'>
        <div className='max-w-screen-xl mx-auto'>
           <div className='p-4'>
              <div className='flex flex-col md:flex-row gap-5'>
                <div className='w-full md:w-1/2'>
                  <Image src={detailProduct?.image} width={300} height={300} className='w-full' alt='Product Image'/>
                </div>
                <div className='flex flex-col w-full gap-4 text-xl'>
                  <h1 className='text-3xl font-semibold mb-5'>{detailProduct?.title}</h1>
                  <p>Price : {rupiah(detailProduct?.price)}</p>
                  <p>Category : {detailProduct?.category}</p>
                  <div className='flex items-center gap-x-2'>Quantity : <AiFillMinusSquare onClick={decreaseQty} className="cursor-pointer"/> <input type={'number'} min={1} minLength={1} value={quantity} className='w-12 border text-center'/> <AiFillPlusSquare onClick={increaseQty} className="cursor-pointer"/></div>
                  <div className='flex flex-row gap-5 mt-5'>
                  <button className='bg-softGray hover:scale-105 duration-300 p-2 text-sm rounded-sm flex items-center gap-x-2'><BsFillCartPlusFill/> Add To Cart </button>
                  <button className='bg-background text-softWhite hover:scale-105 duration-300 p-2 text-sm rounded-sm'>Buy Now</button>
                </div>
              </div>
            </div>
            <div className='my-10'>
              <Tabs
                defaultActiveKey="1"
                items={[
                  {
                    label: `Description`,
                    key: '1',
                    children: <p>{detailProduct?.description}</p> ,
                  },
                  {
                    label: `Testimonials`,
                    key: '2',
                    children: <Testimonials/>,
                  },
                ]}
              />
              </div>
           </div>
        </div>
    </div>
  )
}

export default DetailProduct

DetailProduct.getLayout = (page) => ( <LandingPageLayout title="Encrease - Detail Product" children={page} />)