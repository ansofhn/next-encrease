import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { store } from "../../../store/store";
import { userRepository } from "../../../repository/user";
import { useRouter } from "next/router";
import { transactionRepository } from "../../../repository/transaction";
import { Form, Image, message } from "antd";
import LandingPageLayoutVerified from "../../../layouts/LandingPageLayoutVerified";
import UploadImage from "../../../components/UploadImage";

const TransactionDetail = () => {
  const [form] = Form.useForm();
  // Image State
  const [image, setImage] = useState();
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
  console.log(dataTransaction, "sau");

  // Rupiah Formatter
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const handleFinishForm = async (value) => {
    if (image) {
      try {
        const data = {
          image: image,
        };

        await transactionRepository.api.putTransactionDetail(id, data);
        message.success("Success Send Payment Proof");
        setTimeout(() => {
          router.push("/transaction");
        }, 2500);
      } catch (e) {
        message.error(e.message);
      }
    } else {
      message.error("You Must Upload Payment Proof");
    }
  };

  const handleCancelTransaction = async (id) => {
    try {
      await transactionRepository.api.cancelTransacion(id, " ");
      message.success("Succes Cancel Transaction");
    } catch (e) {
      message.error(e.message);
    }
  };
  return (
    <div className="bg-softGray">
      <div className="flex flex-col w-full max-w-screen-lg gap-5 p-4 py-32 mx-auto font-poppins">
        <div className="flex flex-col items-start justify-between w-full gap-5 p-4 bg-white rounded-lg shadow-lg md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center text-base gap-x-2">
              <IoLocationSharp /> Delivery Address
            </div>
            <div className="flex flex-row gap-2 text-sm font-semibold lg:text-base">
              <p className="pr-2 border-r-2">{userDetail?.data?.fullname}</p>
              <p>{userDetail?.data?.phone}</p>
            </div>
          </div>
          <div className="w-full text-sm lg:text-base md:w-2/3 md:text-end">
            <p>{userDetail?.data?.address}</p>
          </div>
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg">
          <h1 className="text-base">Products Ordered</h1>
          {dataTransaction?.products?.map((data, idx) => {
            return (
              <div
                className="flex items-center w-full gap-4 px-3 py-2"
                key={idx}
              >
                <div className="w-20 p-3 bg-softWhite">
                  <Image
                    preview={false}
                    src={`http://49.0.2.250:3002/file/${data?.image[0]}`}
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
            <div className="text-xs font-bold lg:text-lg">
              Total Price : {rupiah(dataTransaction?.total)}
            </div>
          </div>
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg">
          <h1 className="pb-10 text-base">Payment Method</h1>
          {dataTransaction?.paymentStatus ? (
            <div className="font-bold text-center">
              {dataTransaction?.deliveryStatus}
            </div>
          ) : (
            <div>
              <Form
                className="text-center"
                onFinish={handleFinishForm}
                form={form}
              >
                <Form.Item name={"image"}>
                  <UploadImage setImage={setImage} />
                </Form.Item>
                <Form.Item>
                  <button
                    type="submit"
                    className="w-full p-3 rounded-lg bg-background text-softWhite"
                  >
                    Submit
                  </button>
                </Form.Item>
              </Form>
              <button
                onClick={() => handleCancelTransaction(id)}
                className="w-full p-3 text-xs rounded-lg bg-softGray text-background"
              >
                Cancel Transaction
              </button>
            </div>
          )}
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
