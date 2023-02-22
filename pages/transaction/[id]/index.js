import React from "react";
import LandingPageLayout from "../../../layouts/LandingPageLayout";
import { IoLocationSharp } from "react-icons/io5";
import { store } from "../../../store/store";
import { userRepository } from "../../../repository/user";
import { useRouter } from "next/router";
import { transactionRepository } from "../../../repository/transaction";
import { Button, Form, Image, Upload } from "antd";
import LandingPageLayoutVerified from "../../../layouts/LandingPageLayoutVerified";

const TransactionDetail = () => {
  // Next Router
  const router = useRouter();
  const { id } = router.query;

  // User data from user store
  const user = store.UserStore.user;

  //   Fetching data from user Repository
  const { data: userDetail } = userRepository.hooks.getDetailUser(user?.id);

  //   Fetching data from transaction Repository
  const { data: dataTransaction } =
    transactionRepository.hooks.useTransactionDetail(id);

  // Rupiah Formatter
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  return (
    <div className="bg-softGray">
      <div className="max-w-screen-lg w-full mx-auto py-32 font-poppins flex flex-col gap-5 p-4">
        <div className="bg-white w-full flex flex-col items-start justify-between gap-5 p-4 rounded-lg shadow-lg md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-x-2 text-base">
              <IoLocationSharp /> Delivery Address
            </div>
            <div className="font-semibold flex flex-row gap-2 text-sm lg:text-base">
              <p className="border-r-2 pr-2">{userDetail?.data?.fullname}</p>
              <p>{userDetail?.data?.phone}</p>
            </div>
          </div>
          <div className="text-sm lg:text-base w-full md:w-2/3 md:text-end">
            <p>{userDetail?.data?.address}</p>
          </div>
        </div>
        <div className="bg-white w-full p-4 rounded-lg shadow-lg">
          <h1 className="text-base">Products Ordered</h1>
          {dataTransaction?.products?.map((data, idx) => {
            return (
              <div
                className="flex items-center w-full gap-4 px-3 py-2"
                key={idx}
              >
                <div className="p-3 w-20 bg-softWhite">
                  <Image
                    preview={false}
                    src={`http://49.0.2.250:3002/file/${data?.image}`}
                    width={50}
                    height={50}
                    alt="Product Image"
                  />
                </div>
                <div className="flex flex-col justify-between h-full w-[70%] text-start">
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-background lg:text-base">
                      {data?.name}
                    </div>
                    <div className="text-xs font-semibold text-background/70 lg:text-sm">
                      {rupiah(data?.price)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between"></div>
                </div>
              </div>
            );
          })}
          <div className="w-full text-end text-background">
            <div className="font-bold text-xs lg:text-lg">
              Total Price : {rupiah(dataTransaction?.total)}
            </div>
          </div>
        </div>
        <div className="bg-white w-full p-4 rounded-lg shadow-lg">
          <h1 className="text-base pb-10">Payment Method</h1>
          <div>
            <Form className="text-center">
              <Form.Item>
                <Upload.Dragger>Upload Payment Proof Here</Upload.Dragger>
              </Form.Item>
              <Form.Item>
                <button
                  type="submit"
                  className="bg-background text-softWhite w-full p-3 rounded-lg"
                >
                  Submit
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;

TransactionDetail.getLayout = (page) => (
  <LandingPageLayoutVerified
    title={"Encrease - Detail Transaction"}
    children={page}
  />
);
