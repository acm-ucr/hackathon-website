import React, { useState } from "react";

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
      <input type="file" onChange={handleInput} />
      <button onClick={uploadFile}>UPLOAD</button>
      {uploading && "I AM CURRENTLY UPLOADING LOL"}
    </div>
  );
};

export default Upload;
