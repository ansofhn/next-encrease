import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import SideBarProfile from "../../components/SideBarProfile";
import SettingLayout from "../../layouts/SettingLayout";

const password = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  const handleChangeType = () => {
    setVisiblePassword(!visiblePassword);
  };

  const handleChangeTypeConfirm = () => {
    setVisibleConfirmPassword(!visibleConfirmPassword);
  };

  return (
    <div className="pt-32 pb-10 md:pt-24 bg-softWhite">
      <div className="container flex flex-col lg:flex-row gap-x-10 md:py-24">
        <SideBarProfile />
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
                  <div className="relative flex items-center">
                    <input
                      type={visiblePassword ? "text" : "password"}
                      className="user-profile-form without-ring"
                    />
                    <div
                      className="absolute right-0"
                      onClick={() => handleChangeType()}
                    >
                      {visiblePassword ? (
                        <AiFillEyeInvisible size={20} />
                      ) : (
                        <AiFillEye size={20} />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 text-background">
                  <label className="font-semibold">
                    Confirm Password :<br />
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type={visibleConfirmPassword ? "text" : "password"}
                      className="user-profile-form without-ring"
                    />
                    <div
                      className="absolute right-0"
                      onClick={() => handleChangeTypeConfirm()}
                    >
                      {visibleConfirmPassword ? (
                        <AiFillEyeInvisible size={20} />
                      ) : (
                        <AiFillEye size={20} />
                      )}
                    </div>
                  </div>
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
