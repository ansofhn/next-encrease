import { Pagination, Rate } from 'antd'
import { AiFillStar } from "react-icons/ai";
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
    const data = [1,2,3,4,5]
  return (
    <div className='max-w-screen-xl'>
        <div className='flex flex-col md:flex-row gap-10'>
            <div className='w-full md:w-1/2 lg:w-1/5 text-start border-b-2 border-background p-2 md:border-r-2 md:border-b-0'>
                <h2 className='text-xl font-bold text-start mb-8'>Buyer Reviews</h2>
                <div className='flex gap-3 text-5xl items-end my-2'>
                    <div><AiFillStar style={{color:'orange'}}/></div>
                    <span></span>4.8<span className='text-base'>/5.0</span>
                </div>
                <p>181 Rating - 24 Testimonials</p>
            </div>
            <div className='flex flex-col gap-14 w-full lg:w-2/3'>
            {data?.map(data => {
                        return(
                            <div className='flex flex-col md:flex-row gap-5' key={data}>
                                <div>
                                    <Image src={"https://source.unsplash.com/random/300x300?male"} width={80} height={80} className={'rounded-full'} />
                                </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-lg font-semibold'>Jacob Sugiono</h1>
                                <p className='text-xs'>12/09/2020  &nbsp; &nbsp;  <span><Rate disabled defaultValue={4} /></span></p> 
                                <p>Bad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                            </div>
                        </div>
                        )
                    })}
                    <Pagination simple defaultCurrent={2} total={50} className={'text-center'} />
            </div>
        </div>
    </div>
  )
}

export default Testimonials