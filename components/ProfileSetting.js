import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useContext } from "react";
import { BiLogOut } from "react-icons/bi";
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { UserContext } from "../context/UserDetailContext";

const ProfileSetting = ({ setOpenCart, handleLogout }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  // User Data From Context
  const user = useContext(UserContext);

  return (
    <Menu as={"div"} className="relative inline-block text-left md:pl-6">
      <Menu.Button
        className={"flex items-center gap-3"}
        onClick={() => {
          setOpenCart(false);
        }}
      >
        <div className="p-1 bg-gray-200 rounded-full">
          <div className="overflow-hidden bg-gray-200 rounded-full w-9 h-9">
            <Image
              src={"https://source.unsplash.com/random/40x40?people"}
              width={40}
              height={40}
              alt="Profile Image"
            />
          </div>
        </div>

        <div className="hidden md:block md:text-left">
          <h2 className="text-sm font-medium text-background">
            {user?.fullName}
          </h2>
          <p className="text-xs text-background/50">{user?.email}</p>
        </div>
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
        <Menu.Items className="absolute right-0 z-10 w-56 mt-10 -mr-[60px] lg:-mr-6 origin-top-right rounded-sm shadow-lg shadow-background/10 bg-softWhite focus:outline-none">
          <div className="py-2">
            <Menu.Item>
              {({ active }) => (
                <Link href={`/profile/${user?.id}`}>
                  <div
                    className={classNames(
                      active
                        ? "bg-white text-background hover:bg-gray-100 hover:text-background"
                        : "text-gray-700",
                      "flex items-center gap-4 px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 hover:text-background"
                    )}
                  >
                    <RiAccountCircleLine className="text-lg text-background/90" />
                    Update Profile
                  </div>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link href={"/profile/password"}>
                  <div
                    className={classNames(
                      active
                        ? "bg-white text-background hover:bg-gray-100 hover:text-background"
                        : "text-gray-700",
                      "flex items-center gap-4 px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 hover:text-background"
                    )}
                  >
                    <RiLockPasswordLine className="text-lg text-background/90" />
                    Change Password
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  type="submit"
                  className={classNames(
                    active
                      ? "bg-white text-background hover:bg-gray-100"
                      : "text-gray-700",
                    " px-4 py-2 w-full flex items-center gap-4 text-sm text-left"
                  )}
                >
                  <BiLogOut className="text-lg text-background/90" />
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileSetting;
