import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const NavbarTest = () => {
  const [open, setOpen] = useState(false);

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
      <div className="fixed top-0 flex flex-wrap items-center justify-between w-full p-6 mx-auto bg-softWhite sm:px-10 sm:py-8">
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
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute flex flex-col items-center justify-center w-full h-full bg-background text-softWhite"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.4 }}
            exit="exit"
          >
            <div className="fixed top-0 flex flex-wrap items-center justify-between w-full p-6 mx-auto bg-background sm:px-10 sm:py-10">
              <Link href={"/"}>
                <div className="flex items-center text-2xl font-bold uppercase cursor-pointer text-softWhite">
                  encrease
                </div>
              </Link>

              <div className="flex items-center py-0.5">
                <button
                  type="button"
                  className="inline-flex items-center p-2 ml-3 text-sm rounded-lg text-softWhite focus:outline-none focus:ring-0 lg:hidden"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
            </div>
            <motion.a
              href=""
              className="inline-flex h-20 overflow-hidden text-2xl text-softWhite"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
            >
              Home
            </motion.a>
            <motion.a
              href=""
              className="inline-flex h-20 overflow-hidden text-2xl text-softWhite"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
            >
              About
            </motion.a>
            <motion.a
              href=""
              className="inline-flex h-20 overflow-hidden text-2xl text-softWhite"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.6,
                },
              }}
            >
              Portfolio
            </motion.a>
            <motion.a
              href=""
              className="inline-flex h-20 overflow-hidden text-2xl text-softWhite"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.4,
                },
              }}
            >
              Blog
            </motion.a>
            <motion.a
              href=""
              className="inline-flex h-20 overflow-hidden text-2xl text-softWhite"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarTest;
