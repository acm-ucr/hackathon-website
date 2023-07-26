import React, { useState } from "react";
import { BsUpload } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";

const Upload = ({ field, user, setUser }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleInput = (e) => {
    setFile(e.target.files[0]);
  };

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const uploadFile = async () => {
    setUploading(true);
    const base64 = await readFileAsBase64(file);
    setUser({ ...user, [field]: base64 });
    setUploading(false);
  };

  return (
    <div>
      <div className="flex items-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-fit border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-4">
            <BsUpload className=" text-5xl mb-4 text-hackathon-green-300" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
          </div>
          <div className="w-full">
            <input
              id="dropzone-file"
              onChange={handleInput}
              type="file"
              className=" file:hidden text-hackathon-green-300"
            />
          </div>
        </label>
      </div>
      <button
        className="flex items-center ml-2 opacity-50 font-bold mt-3 animate-bounce hover:text-hackathon-yellow"
        onClick={uploadFile}
      >
        <FaHandPointRight />
        UPLOAD
      </button>
      {uploading && "UPLOADING ..."}
    </div>
  );
};

export default Upload;
