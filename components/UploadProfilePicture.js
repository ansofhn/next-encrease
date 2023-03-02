import { message, Upload } from "antd";
import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const UploadProfilePicture = ({ setImage }) => {
  const props = {
    name: "file",
    action: "http://49.0.2.250:3002/file/upload",
    multiple: false,
    accept: ".png,.jpg,.jpeg",
    showUploadList: false,
    maxCount: 1,
    onChange(args) {
      const resp = args?.file?.response?.data?.filename;
      if (args.file.status !== "uploading") {
        console.log(args.file, args.fileList);
      }
      if (args.file.status === "done") {
        setImage(resp);
        message.success(`file uploaded successfully`);
      } else if (args.file.status === "error") {
        message.error(`file upload failed.`);
      }
    },
  };
  return (
    <div>
      <Upload {...props}>
        <button className="p-2 border-none rounded-lg shadow text-background hover:text-maroon focus:text-maroon ring-0">
          <MdOutlineFileUpload className="text-lg" />
        </button>
      </Upload>
    </div>
  );
};

export default UploadProfilePicture;
