import Image from 'next/image'
import React from 'react'

const SugestionProducts = () => {
  return (
    <div>
        <div className="p-4 flex flex-col gap-10 font-poppins">
          <p className="bg-softWhite text-center text-4xl font-bold">You May Also Like</p>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className='w-full text-center font-semibold text-xl cursor-pointer hover:scale-105 duration-300'>
                <Image
                     src={'https://source.unsplash.com/random/900x900?porche'}
                      width={500}
                      height={500}
                      className="w-full"
                      alt="Product Image"
                />
                <h1 className='py-2'>Porche 911</h1>
            </div>
            <div className='w-full text-center font-semibold text-xl cursor-pointer hover:scale-105 duration-300'>
                <Image
                     src={'https://source.unsplash.com/random/900x900?supra'}
                      width={500}
                      height={500}
                      className="w-full"
                      alt="Product Image"
                />
                <h1 className='py-2'>Toyota Supra</h1>
            </div>
            <div className='w-full text-center font-semibold text-xl cursor-pointer hover:scale-105 duration-300'>
                <Image
                     src={'https://source.unsplash.com/random/900x900?nissangtr'}
                      width={500}
                      height={500}
                      className="w-full"
                      alt="Product Image"
                />
                <h1 className='py-2'>Nissan GTR</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SugestionProducts