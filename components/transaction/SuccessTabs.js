import { Image, message, Modal, Rate } from "antd";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { reviewRepository } from "../../repository/review";
import { transactionRepository } from "../../repository/transaction";
import { store } from "../../store/store";

const SuccessTab = () => {
  const [id, setId] = useState();
  const [open, setOpen] = useState(false);
  const [rate, setRate] = useState();

  const { data: detailTransaction } =
    transactionRepository.hooks.useTransactionDetail(id);
  const detail = detailTransaction;

  //Router
  const router = useRouter();

  // Data from User Store
  const user = store.UserStore.user;

  // Fecthing data from transaction repository
  const { data } = transactionRepository.hooks.useTransaction();

  // Filter Data which same with user id
  const transactionData = data?.data
    ?.filter((data) => data.user.id === user.id)
    ?.filter((data) => data.status === "S");

  // Rupiah Formatter
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const reviewRef = useRef();

  const handleSubmit = async () => {
    try {
      const data = {
        transaction_id: detail?.id,
        product_id: detail?.products[0]?.id,
        message: reviewRef?.current?.value,
        rating: rate,
      };
      await reviewRepository.api.createReview(data);
      message.success("successfully rate product");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-[450px] p-4">
      {transactionData?.map((data, idx) => {
        return (
          <div
            className="w-full max-w-screen-lg mx-auto my-4 rounded-lg bg-softGray/70 font-poppins"
            key={idx}
          >
            {data?.products?.map((product, idx) => {
              return (
                <div className="flex items-center w-full gap-4 p-4" key={idx}>
                  <div className="w-20 p-3 bg-softWhite">
                    <Image
                      preview={false}
                      src={`http://49.0.2.250:3002/file/${product?.image[0]}`}
                      width={50}
                      height={50}
                      alt="Product Image"
                    />
                  </div>
                  <div className="flex flex-col justify-between h-full w-[70%] text-start">
                    <div className="space-y-2">
                      <div className="text-sm font-semibold md:text-base text-background lg:text-lg">
                        {product?.name}
                      </div>
                      <div className="text-xs font-semibold md:text-sm text-background/70">
                        {rupiah(product?.price)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between"></div>
                  </div>
                </div>
              );
            })}
            <div className="flex items-center justify-between w-full p-4 text-end text-background">
              <div className="text-sm font-bold md:text-base lg:text-lg">
                Total : {rupiah(data.total)}
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setId(data?.id);
                    setOpen(true);
                  }}
                  className="px-4 py-1.5 text-xs font-medium border-2 rounded-lg text-background md:text-sm bg-softWhite border-background md:px-8"
                >
                  Rate
                </button>
                <button
                  className="px-4 py-2 text-xs font-medium text-white rounded-lg md:text-sm bg-background md:px-8"
                  onClick={() => {
                    router.push(`/transaction/${data?.id}`);
                  }}
                >
                  Detail
                </button>
              </div>
            </div>
            <Modal
              open={open}
              centered={true}
              onCancel={() => {
                setOpen(false);
              }}
              footer={[
                <button
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="px-5 py-2 mb-5 text-sm font-medium bg-gray-200 rounded-md text-background"
                >
                  Cancel
                </button>,
                <button
                  onClick={() => {
                    setOpen(false);
                    handleSubmit();
                  }}
                  className="px-6 py-2 mb-5 ml-3 mr-6 text-sm font-medium rounded-md bg-background text-softWhite"
                >
                  Submit
                </button>,
              ]}
            >
              <div className="px-6 pt-8 pb-2.5 space-y-6 font-poppins">
                <div className="text-base font-semibold text-center text-background">
                  Add Review
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 p-2 overflow-hidden bg-gray-200 rounded-md md:w-24 md:h-24">
                    <Image
                      preview={false}
                      src={`http://49.0.2.250:3002/file/${detail?.products[0]?.image[0]}`}
                      className="scale-110 rounded-md"
                      alt="Product Image"
                    />
                  </div>
                  <div className="w-[65%] md:w-[60%]">
                    <div className="text-sm font-semibold md:text-base text-background">
                      {detail?.products[0]?.name}
                    </div>
                    <div className="text-xs font-semibold md:text-sm text-background/70">
                      {rupiah(detail?.products[0]?.price)}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-background/70">
                    Your overall rating of this product
                  </div>
                  <div>
                    <Rate
                      onChange={(value) => setRate(value)}
                      allowHalf
                      className="text-yellow-400"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="font-semibold tex-sm text-background">
                    Your Review
                  </div>
                  <div className="w-full px-4 py-3 bg-gray-100 rounded-md mb-14">
                    <textarea
                      ref={reviewRef}
                      type="text"
                      required
                      className="w-full h-20 text-xs bg-transparent text-background/80 focus:outline-none"
                    />
                  </div>
                </div>
                <hr className="border-gray-200" />
              </div>
            </Modal>
          </div>
        );
      })}
    </div>
  );
};

export default SuccessTab;
