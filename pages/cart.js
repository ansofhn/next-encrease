import { message } from "antd";
import React, { useEffect, useState } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import CartComponent from "../components/CartComponent";
import { UserProvider } from "../context/UserDetailContext";
import LandingPageLayoutVerified from "../layouts/LandingPageLayoutVerified";
import { cartRepository } from "../repository/cart";
import { transactionRepository } from "../repository/transaction";
import { userRepository } from "../repository/user";
import { store } from "../store/store";
import { http } from "../utils/http";

const cart = () => {
  // Data Cart
  const [dataCart, setDataCart] = useState([]);

  // user data from user store
  const user = store.UserStore.user;

  // Total product price
  const totalPrice = [];

  // Fetching data from user repository
  const { data: dataUser } = userRepository.hooks.getDetailUser(user.id);

  useEffect(() => {
    getDataCart();
  }, []);
  totalPrice.push(
    dataCart
      .filter((data) => data.userId === user.id)
      .map((data) => data.total)
      .reduce((acc, cur) => acc + cur, 0)
  );

  // Fetching data cart
  const getDataCart = async () => {
    try {
      await http
        .get(cartRepository.url.getCart())
        .then((res) => setDataCart(res.data));
    } catch (e) {
      message.error(e.message);
    }
  };

  // Rupiah Formatter
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  // Cart Functions
  const increaseQty = async (id) => {
    try {
      const data = {
        id: id,
      };
      await cartRepository.api.increaseCart(data);
      getDataCart();
    } catch (e) {
      console.log(e.message);
    }
  };

  const decreaseQty = async (id) => {
    try {
      const data = {
        id: id,
      };
      await cartRepository.api.decreaseCart(data);
      getDataCart();
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const setData = dataCart
        ?.filter((data) => data?.id !== id)
        .map((data) => data);
      await cartRepository.api.deleteProduct(id).then(setDataCart(setData));
      message.success("Success Delete Product");
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleCheckout = async () => {
    const dataForCheckout = [];
    const filteredData = dataCart?.filter((data) => data?.userId === user.id);
    dataForCheckout.push({
      productId: filteredData.map((data) => data.product.id),
      qty: filteredData.map((data) => data.qty),
    });
    if (dataUser?.data?.address) {
      if (dataForCheckout[0].productId.length > 0) {
        try {
          await transactionRepository.api.createTransaction(dataForCheckout);
          message.loading("Making Invoice");
          setTimeout(() => {
            window.location.href = "/transaction";
          }, 3000);
        } catch (e) {
          console.log(e.message);
        }
      } else {
        message.error("you Must have Product to checkout");
      }
    } else {
      message.warning("You Should Fill The Address on Profile");
    }
  };

  return (
    <div className="w-full h-screen pt-[92px] md:pt-28">
      <RemoveScrollBar />
      <div className="fixed bottom-0 z-10 w-full bg-softGray">
        <div className="flex items-center justify-between p-6 bg-softWhite rounded-t-3xl">
          <div className="flex items-center justify-end text-sm font-bold md:text-base text-background">
            {rupiah(totalPrice[0])}
          </div>
          <button
            className="px-4 py-2.5 text-xs md:text-sm bg-background rounded-xl font-semibold uppercase text-softWhite"
            onClick={() => handleCheckout()}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      <div className="h-full p-6 pb-40 space-y-3 overflow-y-auto rounded-t-3xl bg-softGray">
        <UserProvider>
          <CartComponent
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            handleDeleteProduct={handleDeleteProduct}
            dataCart={dataCart}
            rupiah={rupiah}
          />
        </UserProvider>
      </div>
    </div>
  );
};

export default cart;

cart.getLayout = (page) => (
  <LandingPageLayoutVerified title="Encrease - My Cart" children={page} />
);
