import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { transactionRepository } from "../../repository/transaction";

const ToPayTabs = () => {
  const { data } = transactionRepository.hooks.useTransaction();
  const transactionData = data?.data?.filter((data) => !data.paymentStatus);
  console.log(transactionData);
  return (
    <div className="h-[80vh] overflow-y-auto p-4">
      {transactionData?.map((data, idx) => {
        return (
          <div
            className="flex w-full bg-softGray rounded-3xl max-w-screen-lg mx-auto my-4"
            key={idx}
          >
            <div className="flex items-center w-full gap-4 p-6">
              <div className="p-3 w-28 bg-softWhite">
                {data?.id}
                {/* <Image
                  preview={false}
                  src={`http://49.0.2.250:3002/file/${data?.product?.image}`}
                  width={90}
                  height={90}
                  alt="Product Image"
                /> */}
              </div>
              <div className="flex flex-col justify-between h-full w-[70%]">
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-background lg:text-base">
                    Payment Status : {data.paymentStatus.toString()}
                  </div>
                  <div className="text-xs font-semibold text-background/70">
                    {data?.id}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaCaretLeft
                      //   onClick={() => decreaseQty(data?.id)}
                      className="cursor-pointer text-background/50"
                    />
                    <input
                      type={"number"}
                      min={1}
                      minLength={1}
                      disabled
                      value={data?.qty}
                      className="w-10 p-2 text-sm text-center text-background bg-softWhite focus:outline-none"
                    />
                    <FaCaretRight
                      //   onClick={() => increaseQty(data?.id)}
                      className="cursor-pointer text-background/50"
                    />
                  </div>
                  <button
                    className="p-4 text-sm text-background/70"
                    // onClick={() => handleDeleteProduct(data?.id)}
                  >
                    {/* <FiTrash2 /> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToPayTabs;
