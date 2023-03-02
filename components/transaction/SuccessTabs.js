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
    <div className="min-h-[450px] p-4">
      {transactionData?.map((data, idx) => {
        return (
          <div
            className="w-full max-w-screen-lg mx-auto my-4 rounded-lg bg-softGray/70 font-poppins"
            key={idx}
          >
            {data?.products?.map((product, idx) => {
              return (
                <div
                  className="flex items-center w-full gap-4 p-4"
                  key={idx}
                >
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
              <button
                className="px-4 py-2 text-xs text-white rounded-lg md:text-sm bg-background md:px-8"
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
