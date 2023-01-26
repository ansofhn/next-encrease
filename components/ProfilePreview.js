import Image from "next/image";
import React, { useContext } from "react";
import { UserContext } from "../context/UserDetailContext";

const ProfilePreview = () => {
  const user = useContext(UserContext);
  return (
    <>
      <div className="p-1 bg-gray-200 rounded-full">
        <div className="overflow-hidden bg-gray-200 rounded-full w-9 h-9">
          <Image
            src={"https://source.unsplash.com/random/40x40?people"}
            width={40}
            height={40}
          />
        </div>
      </div>

      <div className="text-left">
        <h2 className="text-sm font-medium text-background">
          {user?.fullName}
        </h2>
        <p className="text-xs text-background/50">{user?.email}</p>
      </div>
    </>
  );
};

export default ProfilePreview;
