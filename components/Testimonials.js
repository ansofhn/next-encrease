import { Rate } from 'antd'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
    const data = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className='max-w-screen-xl'>
        <div className='flex flex-col gap-14 '>
        {data?.map(data => {
                    return(
                        <div className='flex flex-col md:flex-row gap-5' key={data}>
                            <div>
                                <Image src={"https://source.unsplash.com/random/300x300?woman"} width={100} height={100} className={'rounded-full'} />
                            </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-lg font-semibold'>Hannah Purwasari</h1>
                            <p className='text-xs'>12/09/2020  &nbsp; &nbsp;  <span><Rate disabled defaultValue={2} /></span></p> 
                            <p>Bad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                        </div>
                    </div>
                    )
                })}
        </div>
    </div>
  )
}

export default Testimonials