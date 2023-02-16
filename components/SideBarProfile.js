import Link from "next/link";
import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { store } from "../store/store";

const SideBarProfile = ({ id }) => {
  const user = store.UserStore.user;
  return (
    <div className="hidden lg:flex flex-col space-y-20 lg:w-[25%] p-10 border-background/60 border-r">
      <Link href={`/profile/${id || user?.id}`}>
        <button className="flex items-center gap-4 pl-10 font-semibold text-background">
          <CgProfile className="text-2xl text-center " />
          Profile
        </button>
      </Link>
      <Link href={"/profile/password"}>
        <button className="flex items-center gap-4 pl-10 font-semibold text-background">
          <RiLockPasswordLine className="text-2xl text-center " />
          Password
        </button>
      </Link>
    </div>
  );
};

export default SideBarProfile;
