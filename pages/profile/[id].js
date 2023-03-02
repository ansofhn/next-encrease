import { Avatar, message } from "antd";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { userRepository } from "../../repository/user";
import { MdOutlineFileUpload } from "react-icons/md";
import SettingLayout from "../../layouts/SettingLayout";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { mutate } from "swr";
import SideBarProfile from "../../components/SideBarProfile";
import UploadProfilePicture from "../../components/UploadProfilePicture";

const UserProfile = () => {
  const router = useRouter();
  const [image, setImage] = useState()

  //Router Query for Detail Profile
  const { id } = router.query;

  //Fetching Api
  const { data } = userRepository.hooks.getDetailUser(id);
  const dataProfile = data?.data;

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        image: image,
        fullname: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        address: addressRef.current.value,
      };
      await userRepository.api.editProfile(id, data);
      message.success("Success Edit Profile");
      await mutate(userRepository.hooks.getDetailUser(id));
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="pt-32 pb-10 md:pt-24 bg-softWhite">
      <div className="container flex flex-col lg:flex-row gap-x-10 md:py-24">
        <SideBarProfile id={id} />
        <div className="flex flex-col px-4 mx-auto w-full md:w-[80%] lg:w-[55%] py-4 gap-y-12">
          <div className="flex items-end justify-center">
            <Avatar
              src={ image ? `http://49.0.2.250:3002/file/${image}` : `http://49.0.2.250:3002/file/${dataProfile?.image}` }
              size={120}
              alt="Profile Image"
            />
            <UploadProfilePicture setImage={setImage} />
          </div>
          <div>
            <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-2 text-background">
                  <label className="font-semibold">
                    NAME :<br />
                  </label>
                  <input
                    ref={nameRef}
                    type={"text"}
                    defaultValue={dataProfile?.fullname}
                    className="user-profile-form without-ring"
                  />
                </div>
                <div className="flex flex-col gap-y-2 text-background">
                  <label className="font-semibold">
                    EMAIL :<br />
                  </label>
                  <input
                    ref={emailRef}
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
                    ref={phoneRef}
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
                    ref={addressRef}
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
