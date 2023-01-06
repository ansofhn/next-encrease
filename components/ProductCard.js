import Image from "next/image";
import React, { useEffect, useState } from "react";
import { productsRepository } from "../repository/products";

const ProductCard = () => {

  //Fetching Data
  const [data,setData] = useState()

  useEffect(()=>{
      productsRepository.hooks.getProducts().then(res => setData(res)) //insert response products to data state
  },[])
  //Fetching Data End

  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 font-poppins">
      {data?.map(data =>{
          return(
            <div className="max-w-sm duration-500 rounded-md shadow-lg bg-slate-50 hover:scale-105" key={data?.id}>
              <div className="p-8 bg-softWhite">
                <Image
                  src={data?.image}
                  alt={'Image Product'}
                  width={300}
                  height={300}
                  className="w-full"
                />
              </div>
              <div className="p-4 text-background">
                <h1 className="text-lg font-semibold">{data?.title}</h1>
                <p className="font-light">Rp.{data?.price}</p>
              </div>
            </div>
          )
        })}
    </div>
  );
};

export default ProductCard;
