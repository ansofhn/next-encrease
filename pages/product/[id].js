import { Tabs,ConfigProvider } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Testimonials from "../../components/Testimonials";
import LandingPageLayout from "../../layouts/LandingPageLayout";
import { productsRepository } from "../../repository/products";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";


const DetailProduct = () => {
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Router Query for Detail Product
  const { id } = router.query;

  // Fetching Data
  const { data: detailProduct } = productsRepository.hooks.useDetailProduct(id);

  // Rupiah Formatter
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <div className="py-40">
      <div className="max-w-screen-xl mx-auto">
        <div className="p-6 md:px-10 lg:px-10 xl:p-6 ">
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="w-full overflow-hidden rounded-sm md:w-2/3">
              <Image
                src={detailProduct?.image}
                width={300}
                height={300}
                className="w-full"
                alt="Product Image"
              />
            </div>
            <div className="flex flex-col w-full gap-4 text-xl">
              <h1 className="mb-5 text-3xl font-bold text-background">
                {detailProduct?.title}
              </h1>
              <p className="text-base text-background">
                Price :
                <span className="ml-4 text-xl font-semibold">
                  {rupiah(detailProduct?.price)}
                </span>
              </p>
              <p className="text-base text-background">
                Category :
                <span className="ml-4 text-xl font-semibold">
                  {detailProduct?.category}
                </span>
              </p>
              <div className="flex items-center gap-x-4">
                <span className="text-base text-background">Quantity :</span>
                <AiFillMinusSquare
                  onClick={decreaseQty}
                  className="cursor-pointer"
                />
                <input
                  type={"number"}
                  min={1}
                  minLength={1}
                  value={quantity}
                  className="w-12 text-lg text-center border"
                />
                <AiFillPlusSquare
                  onClick={increaseQty}
                  className="cursor-pointer"
                />
              </div>
              <div className="flex flex-row gap-5 mt-5">
                <button className="flex items-center px-3 py-3 text-sm font-medium uppercase duration-300 rounded-sm text-background bg-softGray hover:scale-105 gap-x-2">
                  <FaShoppingCart /> Add To Cart
                </button>
                <button className="py-3 text-sm font-medium uppercase duration-300 rounded-sm px-7 bg-background text-softWhite hover:scale-105">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="my-10">
            <ConfigProvider theme={{token:{colorPrimary:'#23374D'}}}>
              <Tabs
                  type="card"
                  defaultActiveKey="1"
                  items={[
                    {
                      label: <p className="font-semibold text-base">Description</p>,
                      key: "1",
                      children: <p>{detailProduct?.description}</p>,
                    },
                    {
                      label:  <p className="font-semibold text-base">Testimonials</p>,
                      key: "2",
                      children: <Testimonials />,
                    },
                  ]}
                />
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;

DetailProduct.getLayout = (page) => (
  <LandingPageLayout title="Encrease - Detail Product" children={page} />
);
