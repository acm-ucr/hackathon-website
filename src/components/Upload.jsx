import React, { useState } from "react";
import { BsUpload } from "react-icons/bs";
import { FaFilePdf, FaTimes } from "react-icons/fa";

const Upload = ({ field, user, setUser }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleInput = async (e) => {
    setUploading(true);
    setFile(e.target.files[0]);
    const base64 = await readFileAsBase64(e.target.files[0]);
    setUser({ ...user, [field]: base64 });
    setUploading(false);
  };

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="mt-3">
      <p className="mb-0">Upload Resume</p>
      <div className="flex items-center w-full flex-col">
        {!file && (
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-fit border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-4">
              <BsUpload className=" text-5xl mb-4 text-hackathon-green-300" />
              <p className="text-sm text-gray-500 font-semibold">
                Upload from my computer
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
        )}
        {file && (
          <div className="flex items-center justify-between w-full my-2">
            <div className="flex items-center">
              <FaFilePdf className="text-xl mx-2" />
              {file.name}
            </div>
            <FaTimes
              className="text-red-500 hover:cursor-pointer hover:text-red-600"
              onClick={() => setFile(null)}
            />
          </div>
        )}
      </div>
      {uploading && "UPLOADING ..."}
    </div>
  );
};

export default Upload;
