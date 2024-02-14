import React, { useState } from "react";
import { RiAttachment2 } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import toaster from "@/utils/toaster";
import { BYTES } from "@/data/dynamic/Bytes";
import { compress } from "@/utils/convert";

const getSize = (maxSize) => BYTES[maxSize[1]] * maxSize[0];
const getType = (types) => "." + types.join(",.");

const displayFile = (file) =>
  `${file.name} (${Math.round(file.size / 10.24) / 100}KB)`;

const Upload = ({ text, setObjects, objects, size, types }) => {
  const [uploading, setUploading] = useState(false);

  const handleInput = (e) => {
    setUploading(true);
    if (objects.files.length + e.target.files.length > 5) {
      toaster("Exceeds 5 files!", "error");
      setUploading(false);
      return;
    }

    setObjects({
      ...objects,
      files: [
        ...objects.files,
        ...Object.values(e.target.files).filter(async (file) => {
          const blob = await compress(file);
          if (blob.size > getSize(size)) {
            toaster(`${blob.name} exceeds ${size[0]} ${size[1]}`, "error");
            return false;
          }
          if (objects.files.map((file) => file.name).includes(file.name)) {
            toaster(`${file.name} is already uploaded`, "error");
            return false;
          }
          return true;
        }),
      ],
    });
    setUploading(false);
  };

  return (
    <div className="mt-3">
      <p className="mb-0">{text}</p>
      <div className="flex flex-col items-start">
        {uploading && <p>uploading...</p>}
        <div className="flex flex-wrap">
          {objects?.files.map((file, index) => (
            <div
              key={index}
              className="flex items-center bg-hackathon-gray-100 px-2 py-1 mb-1 mr-1 !max-w-fit p-0"
              data-cy="upload-list"
            >
              <p
                className="text-sm m-0 whitespace-nowrap text-gray-500 font-semibold"
                data-cy={file.name}
              >
                {displayFile(file)}
              </p>
              <FaTimes
                className="text-hackathon-gray-300 text-sm ml-2 hover:cursor-pointer hover:text-red-600"
                onClick={() => {
                  setObjects({
                    ...objects,
                    files: objects.files.filter((file, idx) => index !== idx),
                  });
                }}
                data-cy={`${file.name}-delete`}
              />
            </div>
          ))}
        </div>
        <label
          htmlFor="dropzone-file"
          className="flex items-center justify-center w-git border-2 border-gray-300 rounded cursor-pointer bg-gray-50 hover:bg-gray-100 px-2 py-1 m-0"
          data-cy="upload-input"
        >
          <RiAttachment2 className="text-xl text-gray-500 mr-1" />
          <p className="text-sm text-gray-500 font-semibold m-0">attach</p>
          <input
            id="dropzone-file"
            onChange={handleInput}
            type="file"
            className="hidden"
            multiple
            title="attatchment"
            accept={() => getType(types)}
          />
        </label>
      </div>
    </div>
  );
};

export default Upload;
