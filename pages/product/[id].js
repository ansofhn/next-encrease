import { Tabs, ConfigProvider, message, Image } from "antd";
// import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Testimonials from "../../components/Testimonials";
import LandingPageLayout from "../../layouts/LandingPageLayout";
import { productsRepository } from "../../repository/products";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import {
  BsChevronCompactUp,
  BsChevronCompactDown,
  BsChevronCompactRight,
  BsChevronCompactLeft,
} from "react-icons/bs";
import SugestionProducts from "../../components/SugestionProducts";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { cartRepository } from "../../repository/cart";
import { mutate } from "swr";

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
  const { data: dataDetailProduct } =
    productsRepository.hooks.useDetailProduct(id);
  const detailProduct = dataDetailProduct?.data;

  // Rupiah Formatter
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  // Slider Function
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 120;
  };
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 120;
  };
  const slideUp = () => {
    let slider = document.getElementById("slider");
    slider.scrollTop = slider.scrollTop - 120;
  };
  const slideDown = () => {
    let slider = document.getElementById("slider");
    slider.scrollTop = slider.scrollTop + 120;
  };

  // Add To Cart Function
  const handleAddToCart = async () => {
    try {
      const data = {
        qty: quantity,
        productId: id,
        price: detailProduct?.price,
      };
      await cartRepository.api.createCart(data);
      message.success("Success Add to Cart");
      mutate(cartRepository.hooks.useCart());
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="pb-10 pt-28 lg:pt-40">
      <div className="max-w-screen-xl mx-auto">
        <div className="p-6 md:px-10 lg:px-10 xl:p-6">
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full overflow-hidden rounded-sm">
              <div className="flex flex-col-reverse gap-5 md:flex-row">
                <div className="flex flex-row items-center md:flex-col">
                  <div
                    className="flex flex-row items-center gap-2 p-2 overflow-scroll max-w-screen max-h-[460px] md:flex-col bg-gray-100 scroll-smooth scrollbar-hide"
                    id="slider"
                  >
                    <div className="md:w-[80px] md:h-[80px] lg:w-[77px] lg:h-[77px] xl:w-[100px] xl:h-[100px]">
                      <Image
                        src={`http://49.0.2.250:3002/file/${detailProduct?.image}`}
                        preview={false}
                        className="w-full h-full"
                        alt="Product Image"
                      />
                    </div>

                    <div className="md:w-[80px] md:h-[80px] lg:w-[77px] lg:h-[77px] xl:w-[100px] xl:h-[100px]">
                      <Image
                        src={`http://49.0.2.250:3002/file/${detailProduct?.image}`}
                        preview={false}
                        className="w-full h-full"
                        alt="Product Image"
                      />
                    </div>

                    <div className="md:w-[80px] md:h-[80px] lg:w-[77px] lg:h-[77px] xl:w-[100px] xl:h-[100px]">
                      <Image
                        src={`http://49.0.2.250:3002/file/${detailProduct?.image}`}
                        preview={false}
                        className="w-full h-full"
                        alt="Product Image"
                      />
                    </div>

                    <div className="md:w-[80px] md:h-[80px] lg:w-[77px] lg:h-[77px] xl:w-[100px] xl:h-[100px]">
                      <Image
                        src={`http://49.0.2.250:3002/file/${detailProduct?.image}`}
                        preview={false}
                        className="w-full h-full"
                        alt="Product Image"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full h-full">
                  <Image
                    src={`http://49.0.2.250:3002/file/${detailProduct?.image}`}
                    preview={false}
                    className="w-full max-h-[475px]"
                    alt="Product Image"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mx-2 text-xl">
              <div className="lg:pl-8 space-y-7">
                <h1 className="pt-5 pb-5 text-3xl font-bold lg:pt-0 text-background">
                  {detailProduct?.name}
                </h1>
                <p className="text-sm text-background">
                  Price :
                  <span className="ml-4 text-lg font-semibold">
                    {rupiah(detailProduct?.price)}
                  </span>
                </p>
                <p className="text-sm text-background">
                  Category :
                  <span className="ml-4 text-base font-semibold ">
                    {detailProduct?.category.name.toUpperCase() || "-"}
                  </span>
                </p>
                <div className="flex items-center gap-x-4">
                  <span className="text-sm text-background">Quantity :</span>
                  <AiFillMinusSquare
                    onClick={decreaseQty}
                    className="cursor-pointer text-background"
                  />
                  <input
                    type={"number"}
                    min={1}
                    minLength={1}
                    defaultValue={quantity}
                    className="w-12 text-base text-center border"
                  />
                  <AiFillPlusSquare
                    onClick={increaseQty}
                    className="cursor-pointer text-background"
                  />
                </div>
                <p className="text-sm text-background">
                  Stock :
                  <span className="ml-4 text-base font-semibold">
                    {detailProduct?.stok}
                  </span>
                </p>
                <div className="flex flex-row gap-5 pt-5">
                  <button
                    className="flex items-center px-4 py-3 text-sm font-medium uppercase duration-300 rounded-sm text-background bg-softGray gap-x-2"
                    onClick={handleAddToCart}
                  >
                    <FaShoppingCart /> Add To Cart
                  </button>
                  <button className="py-3 text-sm font-medium uppercase duration-300 rounded-sm px-7 bg-background text-softWhite">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my-10">
            <ConfigProvider theme={{ token: { colorPrimary: "#23374D" } }}>
              <Tabs
                type="card"
                defaultActiveKey="1"
                items={[
                  {
                    label: (
                      <p className="px-4 text-sm font-semibold font-poppins text-background/80">
                        Description
                      </p>
                    ),
                    key: "1",
                    children: (
                      <p className="p-6">{detailProduct?.description}</p>
                    ),
                  },
                  {
                    label: (
                      <p className="px-4 text-sm font-semibold font-poppins text-background/80">
                        Testimonials
                      </p>
                    ),
                    key: "2",
                    children: <Testimonials />,
                  },
                ]}
              />
            </ConfigProvider>
          </div>
        </div>
        <SugestionProducts />
      </div>
    </div>
  );
};

export default DetailProduct;

DetailProduct.getLayout = (page) => (
  <LandingPageLayout title="Encrease - Detail Product" children={page} />
);
