import { message } from "antd";
import React, { useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import SideBarProfile from "../../components/SideBarProfile";
import SettingLayout from "../../layouts/SettingLayout";
import { userRepository } from "../../repository/user";

const password = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  const handleChangeType = () => {
    setVisiblePassword(!visiblePassword);
  };

  const handleChangeTypeConfirm = () => {
    setVisibleConfirmPassword(!visibleConfirmPassword);
  };

  const passwdRef = useRef();
  const confrmRef = useRef();

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = {
        password: passwdRef.current.value,
        confirmPassword: confrmRef.current.value,
      };
      if (data?.password !== data?.confirmPassword) {
        message.error("Password confirmation does not match");
      } else {
        await userRepository.api.changePassword(data);
        message.success("Successfully change password");
      }
    } catch (e) {
      message.error(e.message);
      console.log(e.message);
    }
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
            <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-y-12">
                <div className="flex flex-col gap-y-2 text-background">
                  <label className="font-semibold">
                    Password :<br />
                  </label>
                  <div className="relative flex items-center">
                    <input
                      ref={passwdRef}
                      type={visiblePassword ? "text" : "password"}
                      className="user-profile-form without-ring"
                      required
                      minLength={6}
                      maxLength={20}
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
                      ref={confrmRef}
                      type={visibleConfirmPassword ? "text" : "password"}
                      className="user-profile-form without-ring"
                      required
                      minLength={6}
                      maxLength={20}
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
