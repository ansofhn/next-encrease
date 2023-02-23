import { Image } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { transactionRepository } from "../../repository/transaction";
import { store } from "../../store/store";

const SuccessTab = () => {
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
  return (
    <div className="p-4">
      {transactionData?.map((data, idx) => {
        console.log(data, "asu");
        return (
          <div
            className="w-full bg-softGray rounded-lg max-w-screen-lg mx-auto my-4 font-poppins"
            key={idx}
          >
            {data?.products?.map((product, idx) => {
              return (
                <div
                  className="flex items-center w-full gap-4 px-3 py-2"
                  key={idx}
                >
                  <div className="p-3 w-20 bg-softWhite">
                    <Image
                      preview={false}
                      src={`http://49.0.2.250:3002/file/${product?.image}`}
                      width={50}
                      height={50}
                      alt="Product Image"
                    />
                  </div>
                  <div className="flex flex-col justify-between h-full w-[70%] text-start">
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-background lg:text-base">
                        {product?.name}
                      </div>
                      <div className="text-xs font-semibold text-background/70 lg:text-sm">
                        {rupiah(product?.price)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between"></div>
                  </div>
                </div>
              );
            })}
            <div className="w-full text-end p-4 flex justify-between items-center text-background">
              <div className="font-bold text-xs lg:text-lg">
                Total : {rupiah(data.total)}
              </div>
              <button
                className="bg-background py-2 px-4 md:px-8 text-sm text-white rounded-lg"
                onClick={() => {
                  router.push(`/transaction/${data?.id}`);
                }}
              >
                Detail
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SuccessTab;
