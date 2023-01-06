import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { productsRepository } from "../repository/products";

const ProductCard = () => {
  const router = useRouter()

  //Detail Product Router
  const detailProduct = (id)=>{
    router.push({
      pathname : "/product/[id]",
      query : {id : id}
    })
  }

  //Fetching Products Data
  const {data:Products} = productsRepository.hooks.useProducts()

  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 font-poppins">
      {Products?.map(data =>{
          return(
            <div className="max-w-sm duration-500 rounded-md shadow-lg bg-slate-50 hover:scale-105" key={data?.id} onClick={()=>detailProduct(data?.id)}>
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
