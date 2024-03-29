import { Avatar, Pagination, Rate } from "antd";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FilterReview from "./FilterReview";
import { reviewRepository } from "../repository/review";
import moment from "moment/moment";
import { productsRepository } from "../repository/products";

const Testimonials = ({ id }) => {
  const [pagePagination, setPagePagination] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [filter, setFilter] = useState([]);

  const { data: dataReview } = reviewRepository.hooks.getDetailReview(
    id,
    pagePagination,
    filter
  );
  const review = dataReview?.data;

  const { data: dataDetailProduct } =
    productsRepository.hooks.useDetailProduct(id);
  const detailProduct = dataDetailProduct?.data;

  useEffect(() => {
    setTotalPage(dataReview?.meta?.totalItems);
  }, [dataReview]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setFilter([...filter, e.target.value]);
    } else {
      const filtered = filter.filter((review) => review !== e.target.value);
      setFilter(filtered);
    }
  };

  return (
    <div className="max-w-screen-xl mx-8 md:mx-0">
      <div className="flex flex-col gap-10 my-4 md:flex-row">
        <div className="w-full lg:p-2 md:w-[45%] lg:w-[25%] xl:w-[20%] text-start">
          <h2 className="mb-3 text-lg font-bold text-center uppercase text-background">
            Buyer Reviews
          </h2>
          <div className="flex items-end justify-center gap-3 my-4 text-5xl">
            <div>
              <AiFillStar style={{ color: "orange" }} />
            </div>
            <span className="text-6xl font-semibold text-background">
              {detailProduct ? ((detailProduct?.rate * 100) / 100).toFixed(1) : "0"}
            </span>
            <span className="text-base text-background/80">/5.0</span>
          </div>
          <p className="mx-2 text-sm text-center text-background/80">
            {totalPage} Rating / Testimonials
          </p>
          <FilterReview handleChange={handleChange} />
        </div>

        <div className="flex flex-col w-full lg:p-4 gap-14 lg:w-2/3">
          {review?.map((data) => {
            return (
              <div className="flex flex-col gap-5 md:flex-row" key={data}>
                <div>
                  <div className="p-1 w-[88px] overflow-hidden bg-gray-200 rounded-full">
                    <Avatar
                      src={`http://49.0.2.250:3002/file/${data?.user?.image}`}
                      size={80}
                      alt="Profile Image"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold">
                    {data?.user?.fullname}
                  </h1>
                  <p className="text-xs">
                    {moment(data?.createdAt).format("DD MMM YYYY, HH:mm")}{" "}
                    &nbsp; &nbsp;
                    <span>
                      <Rate
                        disabled
                        allowHalf
                        className="text-yellow-400"
                        defaultValue={Number(data?.rate)}
                      />
                    </span>
                  </p>
                  <p>{data?.message}</p>
                </div>
              </div>
            );
          })}
          {review?.length < 1 && (
            <div className="p-4 mt-4 text-xl font-bold text-center border border-gray-200 rounded-lg md:text-2xl md:p-20 text-background/80 font-poppins">
              There are no reviews for this product yet
              <div className="font-normal text-[11px] md:text-base text-background/70">
                Buy this product and be the first to leave a review
              </div>
            </div>
          )}
          <Pagination
            current={pagePagination}
            pageSize={5}
            total={totalPage}
            onChange={(current) => setPagePagination(current)}
            className={"text-center"}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
