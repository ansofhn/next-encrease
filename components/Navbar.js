import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RemoveScrollBar } from "react-remove-scroll-bar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollChange, setScrollChange] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrollChange(true);
      } else {
        setScrollChange(false);
      }
    });
  }, []);

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
      <div
        className={`fixed top-0 z-10 flex flex-wrap items-center justify-between w-full p-6 mx-auto ${
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

        <div className="flex items-center gap-2 lg:order-2">
          <Link href={"/auth/login"}>
            <button className="px-4 py-2 font-bold uppercase transition duration-300 border-2 rounded-md cursor-pointer text-background border-background">
              sign in
            </button>
          </Link>
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
        <div className="hidden w-full mt-10 rounded-lg xl:ml-[500px] 2xl:ml-[900px] lg:mt-0 lg:justify-between lg:items-center lg:flex lg:w-auto lg:order-1 bg-softGray lg:bg-transparent lg:p-0">
          <div className="flex flex-col gap-4 p-2 font-medium lg:p-0 lg:flex-row lg:gap-10 lg:font-medium text-background">
            <Link href={"/"}>
              <div className="p-2 cursor-pointer">Home</div>
            </Link>
            <Link href={"/product"}>
              <div className="p-2 cursor-pointer">Products</div>
            </Link>
            <Link href={"/about"}>
              <div className="p-2 cursor-pointer">About</div>
            </Link>
            <Link href={"/contact"}>
              <div className="p-2 cursor-pointer">Contact</div>
            </Link>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed z-10 flex flex-col items-center justify-center w-full h-full bg-softDark text-softWhite"
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

              <div className="flex items-center py-0.5">
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
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
