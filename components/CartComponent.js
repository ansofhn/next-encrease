import Image from "next/image";
import React, { useContext } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { UserContext } from "../context/UserDetailContext";

const CartComponent = (props) => {
  const { increaseQty, decreaseQty, handleDeleteProduct, dataCart, rupiah } =
    props;
  // User Data From Context
  const user = useContext(UserContext);
  return (
    <div>
      {dataCart
        ?.filter((data) => data?.createdBy === user.email)
        .map((data, idx) => {
          return (
            <div
              className="flex w-full bg-softWhite rounded-3xl max-w-lg mx-auto my-4"
              key={idx}
            >
              <div className="flex items-center w-full gap-4 p-6">
                <div className="p-3 w-28 bg-softGray">
                  <Image
                    src={`http://49.0.2.250:3002/file/${data?.product?.image}`}
                    width={300}
                    height={300}
                    alt="Product Image"
                  />
                </div>
                <div className="flex flex-col justify-between h-full w-[70%]">
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-background lg:text-base">
                      {data?.product?.name}
                    </div>
                    <div className="text-xs font-semibold text-background/70">
                      {rupiah(data?.product?.price)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaCaretLeft
                        onClick={() => decreaseQty(data?.id)}
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
                        onClick={() => increaseQty(data?.id)}
                        className="cursor-pointer text-background/50"
                      />
                    </div>
                    <button
                      className="p-4 text-sm text-background/70"
                      onClick={() => handleDeleteProduct(data?.id)}
                    >
                      <FiTrash2 />
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

export default CartComponent;
