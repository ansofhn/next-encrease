import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import SettingLayout from "../../layouts/SettingLayout";

const password = () => {
  return (
    <div className="pt-32 pb-10 md:pt-24 bg-softWhite">
      <div className="container flex flex-col lg:flex-row gap-x-10 md:py-24">
        <div className="hidden lg:flex flex-col space-y-20 lg:w-[25%] p-10 border-background/60 border-r">
          <Link href={"/profile/1"}>
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
        <div className="flex flex-col px-4 mx-auto w-full md:w-[80%] lg:w-[55%] py-4 gap-y-20">
          <div className="text-xl font-bold text-background">
            Set Your Password
            <p className="text-sm font-light text-background">
              In order to keep your account safe you need to create a strong
              password
            </p>
          </div>
          <div>
            <form>
              <div className="flex flex-col gap-y-12">
                <div className="flex flex-col gap-y-2 text-background">
                  <label className="font-semibold">
                    Password :<br />
                  </label>
                  <input
                    type={"text"}
                    // defaultValue={dataProfile?.name}
                    className="user-profile-form without-ring"
                  />
                </div>
                <div className="flex flex-col gap-y-2 text-background">
                  <label className="font-semibold">
                    Confirm Password :<br />
                  </label>
                  <input
                    type={"email"}
                    // defaultValue={dataProfile?.email}
                    className="user-profile-form without-ring"
                  />
                </div>
                <div className="flex flex-row gap-5">
                  <button
                    type="submit"
                    className="p-3 text-sm duration-200 rounded-md bg-background text-softWhite hover:scale-105"
                  >
                    Change Password
                  </button>
                  <button
                    type="reset"
                    className="p-3 text-sm duration-200 rounded-md bg-softGray text-background hover:scale-105"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default password;

password.getLayout = (page) => (
  <SettingLayout title={"Encrease - Password Setting"} children={page} />
);
