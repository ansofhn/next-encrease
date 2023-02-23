import { message, Upload } from "antd";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const UploadImage = ({ setImage }) => {
  const props = {
    name: "file",
    action: "http://49.0.2.250:3002/file/upload",
    multiple: false,
    listType: "picture",
    accept: ".png,.jpg,.jpeg",
    showUploadList: {
      showRemoveIcon: true,
      removeIcon: (
        <AiOutlineDelete
          onClick={(e) => console.log(e, "custom removeIcon event")}
        />
      ),
    },
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
      <Upload.Dragger {...props}>Upload Payment Proof Here</Upload.Dragger>
    </div>
  );
};

export default UploadImage;
