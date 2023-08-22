import React, { useState } from "react";
import { RiAttachment2 } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Row, Col } from "react-bootstrap";

const Upload = ({ text, setObjects }) => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleInput = (e) => {
    setUploading(true);
    if (files.length + e.target.files.length > 5) {
      toast("❌ Exceeds 5 files!");
      return;
    }
    const fileList = [];
    Object.entries(e.target.files).forEach(([ind, file]) => {
      if (file.size > 1048576) {
        toast("❌ File too big, exceeds 1MB!");
      } else fileList.push(file);
    });
    setFiles([...files, ...fileList]);
    setObjects([...files, ...fileList]);
    setUploading(false);
  };

  return (
    <div className="mt-3">
      <p className="mb-0">{text}</p>
      <div className="flex flex-col items-start">
        {uploading && <p>uploading...</p>}
        <Row className="p-0 m-0">
          {files.map((file, index) => (
            <Col
              key={index}
              className="flex items-center bg-hackathon-gray px-2 py-1 mb-1 mr-1 !max-w-fit p-0"
            >
              <p className="text-sm m-0 whitespace-nowrap text-gray-500 font-semibold ">
                {file.name} ({Math.round(file.size / 10.24) / 100}KB)
              </p>
              <FaTimes
                className="text-hackathon-darkgray text-sm ml-2 hover:cursor-pointer hover:text-red-600"
                onClick={() => {
                  setFiles(files.filter((file, idx) => index != idx));
                  setObjects(files.filter((file, idx) => index != idx));
                }}
              />
            </Col>
          ))}
        </Row>
        <label
          htmlFor="dropzone-file"
          className="flex items-center justify-center w-git border-2 border-gray-300 rounded cursor-pointer bg-gray-50 hover:bg-gray-100 px-2 py-1 m-0"
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
          />
        </label>
      </div>
    </div>
  );
};

export default Upload;
