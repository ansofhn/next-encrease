import React from "react";
import SettingLayout from "../../layouts/SettingLayout";

const password = () => {
  return (
    <div className="flex flex-col px-4 mx-auto w-[55%] py-4 gap-y-20">
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
                Save Changes
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
  );
};

export default password;

password.getLayout = (page) => (
  <SettingLayout title={"Encrease - Password Setting"} children={page} />
);
