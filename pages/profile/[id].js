import { Avatar } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { userRepository } from "../../repository/user";
import { MdOutlineFileUpload } from "react-icons/md";
import SettingLayout from "../../layouts/SettingLayout";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";

const UserProfile = () => {
  const router = useRouter();

  //Router Query for Detail Profile
  const { id } = router.query;

  //Fetching Api
  const { data: dataProfile } = userRepository.hooks.getDetailUser(id);

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
        <div className="flex flex-col px-4 mx-auto w-full md:w-[80%] lg:w-[55%] py-4 gap-y-12">
          <div className="flex items-end justify-center">
            <Avatar src={dataProfile?.image} size={120} />
            <button className="p-2 border-none rounded-lg shadow text-background hover:text-maroon focus:text-maroon ring-0">
              <MdOutlineFileUpload className="text-lg" />
            </button>
          </div>
          <div>
            <form>
              <div className="flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-2 text-background">
                  <label className="font-semibold">
                    NAME :<br />
                  </label>
                  <input
                    type={"text"}
                    defaultValue={dataProfile?.name}
                    className="user-profile-form without-ring"
                  />
                </div>
                <div className="flex flex-col gap-y-2 text-background">
                  <label className="font-semibold">
                    EMAIL :<br />
                  </label>
                  <input
                    type={"email"}
                    defaultValue={dataProfile?.email}
                    className="user-profile-form without-ring"
                  />
                </div>
                <div className="flex flex-col gap-y-2 text-background">
                  <label className="font-semibold">
                    PHONE :<br />
                  </label>
                  <input
                    type={"tel"}
                    defaultValue={dataProfile?.phone}
                    className="user-profile-form without-ring"
                  />
                </div>
                <div className="flex flex-col gap-y-2 text-background">
                  <label className="font-semibold">
                    ADDRESS :<br />
                  </label>
                  <textarea
                    defaultValue={dataProfile?.address}
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
      </div>
    </div>
  );
};

export default UserProfile;

UserProfile.getLayout = (page) => {
  return <SettingLayout children={page} title={"Encrease - Profile Setting"} />;
};
