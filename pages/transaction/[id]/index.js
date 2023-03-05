import React, { useState } from "react";
import { IoLocationSharp, IoChevronBack } from "react-icons/io5";
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
      router.push("/transaction");
    } catch (e) {
      message.error(e.message);
    }
  };

  const handleAccept = async (id) => {
    try {
      await transactionRepository.api.acceptTransaction(id, " ");
      message.success("successfully received the order");
      router.push("/transaction");
    } catch (error) {
      message.error(error.message);
    }
  };

  const deliveryStatus = (statusArgs)=>{
    switch(statusArgs){
      case "Menunggu Konfirmasi Admin":
        return "Waiting For Approval"
      break;
      case "Penjual Sedang Menyiapkan Barang/Jasa":
        return "The seller is preparing the goods/services"
      break;
      case "Pesanan Sedang Dalam Pengiriman":
        return "Your order is in Delivery"
        break;
      case "Pesanan Sudah Diterima dan Success":
        return "Order Received and Success"
        break;
      default:
        return statusArgs
    }
  }
  return (
    <div className="bg-softGray md:p-4">
      <div className="flex flex-col w-full max-w-screen-lg gap-5 p-4 py-32 mx-auto font-poppins">
        <div onClick={() => router.back()} className="flex items-center w-full gap-4 p-4 text-sm font-semibold bg-white rounded-lg shadow-lg cursor-pointer lg:text-base">
          <IoChevronBack className="text-base"/>
          <button>Back</button>
        </div>
        <div className="flex flex-col items-start justify-between w-full gap-5 p-4 bg-white rounded-lg shadow-lg md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center pb-2 text-base font-bold lg:text-lg text-background gap-x-2">
              <IoLocationSharp /> Delivery Address
            </div>
            <div className="flex flex-row items-start gap-2 pt-2 text-sm font-semibold lg:text-base">
              <p className="pr-2 border-r-2">{userDetail?.data?.fullname}</p>
              <p>{userDetail?.data?.phone}</p>
            </div>
          </div>
          <div className="w-full text-xs lg:text-sm md:pt-6 md:w-2/3 md:text-end">
            <p>{userDetail?.data?.address}</p>
          </div>
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg">
          <h1 className="pb-2 text-base font-bold lg:text-lg text-background">
            Products Ordered
          </h1>
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
                    <div className="text-sm font-semibold text-background lg:text-base">
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
            <div className="py-4 text-sm font-bold md:text-base lg:text-lg">
              Total Price : {rupiah(dataTransaction?.total)}
            </div>
          </div>
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg">
          <h1 className="pb-10 text-base font-bold lg:text-lg text-background">
            Payment Method
          </h1>
          {dataTransaction?.paymentStatus ? (
            <div>
              <div className="py-4 text-sm font-bold text-center md:text-base lg:text-lg">
                {deliveryStatus(dataTransaction?.deliveryStatus)}
              </div>
              {dataTransaction?.deliveryStatus ===
              "Pesanan Sedang Dalam Pengiriman" ? (
                <div className="pt-10">
                  <button
                    onClick={() => handleAccept(id)}
                    className="w-full text-sm lg:text-base p-2.5 rounded-lg bg-background font-medium text-softWhite"
                  >
                    Order Received
                  </button>
                </div>
              ) : (
                ""
              )}
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
                    className="w-full p-3 text-sm font-medium rounded-lg font-poppins lg:text-base bg-background text-softWhite"
                  >
                    Submit
                  </button>
                </Form.Item>
              </Form>
              <button
                onClick={() => handleCancelTransaction(id)}
                className="w-full p-3 text-sm font-medium rounded-lg lg:text-base bg-softGray text-background"
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
