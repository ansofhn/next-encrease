import { Menu, Transition } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState, Fragment } from "react";
import {
  FaBell,
  FaCaretLeft,
  FaCaretRight,
  FaShoppingCart,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { productsRepository } from "../repository/products";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [scrollChange, setScrollChange] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const router = useRouter();
  const currentRoute = router.pathname;

  //Fetching Products Data
  const { data: Products } = productsRepository.hooks.useProducts();

  // Rupiah Formatter
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrollChange(true);
      } else {
        setScrollChange(false);
      }
    });
  }, [Products]);

  //lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
        delay: 1,
      },
    },
  };

  return (
    <div>
      {/* Main Navbar */}
      <div
        className={`fixed top-0 z-20 flex flex-wrap items-center justify-between w-full p-6 mx-auto ${
          scrollChange || currentRoute === "/product/[id]"
            ? "shadow-lg shadow-background/5"
            : ""
        } bg-softWhite sm:px-10 sm:py-8 transition duration-300`}
      >
        <Link href={"/"}>
          <div className="flex items-center text-2xl font-bold uppercase cursor-pointer text-background">
            encrease
          </div>
        </Link>

        <div className="flex items-center gap-2 lg:gap-4 lg:order-2">
          <div
            onClick={() => {
              setOpenCart(!openCart);
            }}
            className="items-center hidden px-2 py-1 bg-gray-100 rounded-full cursor-pointer lg:flex"
          >
            <FaShoppingCart className="flex items-center justify-center w-5 h-7 text-background/70" />
          </div>

          {/* <Link href={"/auth/login"}>
            <button className="px-3 py-1 font-bold uppercase transition duration-300 border-2 rounded-md cursor-pointer md:mx-6 text-background border-background">
              sign in
            </button>
          </Link> */}
          <Menu as={"div"} className="relative inline-block text-left md:px-6">
            <Menu.Button
              className={"hidden lg:flex items-center gap-3"}
              onClick={() => {
                setOpenCart(false);
              }}
            >
              <div className="w-10 h-10 overflow-hidden bg-gray-200 rounded-full">
                <Image
                  src={"https://source.unsplash.com/random/40x40?people"}
                  width={40}
                  height={40}
                />
              </div>
              <div className="text-left">
                <h2 className="text-sm font-medium text-background">Ilham</h2>
                <p className="text-xs text-background/50">User</p>
              </div>
              <FaChevronDown className="w-3 h-3 ml-2 text-sm text-background/60" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-400"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 w-56 mt-10 origin-top-right rounded-sm shadow-lg shadow-background/10 bg-softWhite focus:outline-none">
                <div className="py-2">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href={""}>
                        <div
                          className={classNames(
                            active
                              ? "bg-white text-background hover:bg-gray-100 hover:text-background"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 hover:text-background"
                          )}
                        >
                          Update Profile
                        </div>
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Link href={""}>
                        <div
                          className={classNames(
                            active
                              ? "bg-white text-background hover:bg-gray-100 hover:text-background"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 hover:text-background"
                          )}
                        >
                          Change Password
                        </div>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        // onClick={handleLogout}
                        type="submit"
                        className={classNames(
                          active
                            ? "bg-white text-background hover:bg-gray-100"
                            : "text-gray-700",
                          "block px-4 py-2 w-full text-sm text-left"
                        )}
                      >
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg text-background focus:outline-none focus:ring-0 lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden w-full mt-10 rounded-lg xl:ml-[400px] 2xl:ml-[800px] lg:mt-0 lg:justify-between lg:items-center lg:flex lg:w-auto lg:order-1 bg-softGray lg:bg-transparent lg:p-0">
          <div className="flex flex-col gap-4 p-2 font-medium lg:p-0 lg:flex-row lg:gap-10 lg:font-medium text-background">
            <Link href={"/"}>
              <div
                onClick={() => {
                  setOpenCart(false);
                }}
                className="p-2 cursor-pointer"
              >
                Home
              </div>
            </Link>
            <Link href={"/product"}>
              <div
                onClick={() => {
                  setOpenCart(false);
                }}
                className="p-2 cursor-pointer"
              >
                Products
              </div>
            </Link>
            <Link href={"/about"}>
              <div
                onClick={() => {
                  setOpenCart(false);
                }}
                className="p-2 cursor-pointer"
              >
                About
              </div>
            </Link>
            <Link href={"/contact"}>
              <div
                onClick={() => {
                  setOpenCart(false);
                }}
                className="p-2 cursor-pointer"
              >
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {/* Navbar Mobile */}
        {open && (
          <motion.div
            className="fixed z-30 flex flex-col items-center justify-center w-full h-full bg-softDark text-softWhite"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.4 }}
            exit="exit"
          >
            <RemoveScrollBar />
            <div className="fixed top-0 flex flex-wrap items-center justify-between w-full p-6 mx-auto bg-softDark sm:px-10 sm:py-10 md:py-8">
              <Link href={"/"}>
                <div
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className="flex items-center text-2xl font-bold uppercase cursor-pointer text-softGray/70"
                >
                  encrease
                </div>
              </Link>

              <div className="flex items-center">
                <button
                  type="button"
                  className="inline-flex items-center p-2 ml-3 text-sm rounded-lg text-softGray/70 focus:outline-none focus:ring-0 lg:hidden"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
            </div>
            <motion.div
              className="inline-flex mb-6 text-base font-light tracking-widest uppercase text-softGray/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              exit={{
                opacity: 0,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
            >
              menu
            </motion.div>
            <Link href={"/"}>
              <motion.div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`inline-flex my-2 text-3xl font-bold ${
                  currentRoute === "/" ? "text-softWhite" : "text-softGray/70"
                } `}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                exit={{
                  opacity: 0,
                  y: 80,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.8,
                  },
                }}
              >
                Home
              </motion.div>
            </Link>
            <Link href={"/product"}>
              <motion.div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`inline-flex my-2 text-3xl font-bold ${
                  currentRoute === "/product"
                    ? "text-softWhite"
                    : "text-softGray/70"
                } `}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                exit={{
                  opacity: 0,
                  y: 80,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.7,
                  },
                }}
              >
                Products
              </motion.div>
            </Link>
            <Link href={"/about"}>
              <motion.div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`inline-flex my-2 text-3xl font-bold ${
                  currentRoute === "/about"
                    ? "text-softWhite"
                    : "text-softGray/70"
                } `}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                exit={{
                  opacity: 0,
                  y: 80,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.6,
                  },
                }}
              >
                About Us
              </motion.div>
            </Link>
            <Link href={"/contact"}>
              <motion.div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`inline-flex my-2 text-3xl font-bold ${
                  currentRoute === "/contact"
                    ? "text-softWhite"
                    : "text-softGray/70"
                } `}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                exit={{
                  opacity: 0,
                  y: 80,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                }}
              >
                Contact
              </motion.div>
            </Link>
            <motion.div
              className="absolute flex items-center text-xs font-light tracking-widest bottom-6 text-softGray/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              exit={{
                opacity: 0,
                transition: {
                  ease: "easeInOut",
                  delay: 0.3,
                },
              }}
            >
              © 2023 Encrease
            </motion.div>
          </motion.div>
        )}

        {/* Modal Cart */}
        {openCart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-10 w-full h-screen bg-softDark/30"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", delay: 0.2 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed z-30 py-10 space-y-8 px-14 right-3 top-28 bg-softWhite"
            >
              <div className="flex items-center justify-end">
                <button
                  onClick={() => {
                    setOpenCart(!openCart);
                  }}
                  className="text-2xl text-background/70"
                >
                  <FaTimes />
                </button>
              </div>
              <hr className="border-gray-200" />
              <div className="space-y-8">
                <div className="flex items-center gap-10 mr-4">
                  <button className="p-4 text-2xl text-background/70">
                    <FiTrash2 />
                  </button>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center p-4 w-28 h-28 bg-softGray">
                      <Image
                        src={Products[0]?.image}
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-bold text-background">
                        {Products[0]?.title}
                      </div>
                      <div className="text-xs text-background/50">
                        {Products[0]?.category}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-24 h-24 p-2 border-gray-200 border-x-2">
                    <FaCaretLeft
                      onClick={decreaseQty}
                      className="cursor-pointer text-background/50"
                    />
                    <input
                      type={"number"}
                      min={1}
                      minLength={1}
                      value={quantity}
                      className="w-10 p-2 text-sm text-center bg-softWhite focus:outline-none"
                    />
                    <FaCaretRight
                      onClick={increaseQty}
                      className="cursor-pointer text-background/50"
                    />
                  </div>
                  <div className="font-semibold text-background">
                    {rupiah(Products[0]?.price)}
                  </div>
                </div>
                <hr className="border-gray-200" />
              </div>
              <div className="mt-10 space-y-6">
                <div className="flex items-center justify-end text-xl font-bold uppercase text-background">
                  TOTAL PRICE :{" "}
                  <span className="ml-2">{rupiah(Products[0]?.price)}</span>
                </div>
                <div className="flex items-center justify-end">
                  <button className="px-6 py-2 text-sm font-semibold text-white uppercase transition duration-300 border-2 cursor-pointer border-background bg-background hover:bg-softWhite hover:text-background">
                    proceed to checkout
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
