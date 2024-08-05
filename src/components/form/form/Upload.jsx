import { useState } from "react";
import {
  Upload as LucideUpload,
  FileText,
  Image as LucideImage,
  X,
  Eye,
} from "lucide-react";
import toaster from "@/utils/toaster";
import { BYTES } from "@/data/Bytes";
import { readFileAsBase64, compress } from "@/utils/convert";
import Modal from "@/components/admin/dashboards/dashboard/Modal";
const getSize = (maxSize) => BYTES[maxSize[1]] * maxSize[0];
const getType = (types) => "." + types.join(",.");

const Upload = ({ field, user, setUser, text, maxSize, types, required }) => {
  const [file, setFile] = useState(
    user[field] && user[field].startsWith("data:image")
      ? { src: user[field], type: "image", title: `${user.name}.png` }
      : null,
  );
  const [uploading, setUploading] = useState(false);
  const [showModal, setShowModal] = useState(null);

  const handleInput = async (e) => {
    setUploading(true);
    const blob = await compress(e.target.files[0]);
    if (blob.size > getSize(maxSize)) {
      toaster(`File too big, exceeds ${maxSize[0]} ${maxSize[1]}!`, "error");
      return;
    }
    const base64 = await readFileAsBase64(blob);
    setUser({ ...user, [field]: base64 });
    setFile({
      src: base64,
      type: blob.type,
      title: blob.name,
    });
    setUploading(false);
  };

  return (
    <div className="flex flex-col">
      <p className="mb-0 font-semibold">
        {text}
        {required && <span className="text-red-500">*</span>}
      </p>
      <div className="flex w-full flex-col items-center" data-cy="upload">
        {!file && (
          <label
            htmlFor="dropzone-file"
            className="flex h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center py-4">
              <LucideUpload className="mb-2 text-3xl text-hackathon-green-300" />
              <p className="text-sm font-semibold text-gray-500">
                Upload from my computer
              </p>
            </div>
            <div className="w-full" data-cy="upload-input">
              <input
                id="dropzone-file"
                onChange={handleInput}
                type="file"
                className="hidden"
                accept={getType(types)}
              />
            </div>
          </label>
        )}
        {file && (
          <div
            className="my-2 flex w-full items-center justify-between bg-gray-200 px-2 py-2"
            data-cy="upload-success"
          >
            <div className="flex items-center">
              {file.type.split("/")[0] === "image" ? (
                <LucideImage className="mr-2 text-xl" />
              ) : (
                <FileText className="mr-2 text-xl" />
              )}
              {file.title}
            </div>
            <div className="flex flex-row">
              {file.type.split("/")[0] === "image" && (
                <Eye
                  onClick={() => setShowModal(true)}
                  className="mr-2 text-gray-500 hover:cursor-pointer hover:text-gray-800"
                />
              )}

              <X
                className="text-gray-500 hover:cursor-pointer hover:text-red-600"
                onClick={() => setFile(null)}
                data-cy="upload-cancel"
              />
            </div>
          </div>
        )}
        {showModal && <Modal data={file} setModal={setShowModal} />}
      </div>
      {toaster.type === "error"
        ? uploading && "UPLOADING ..."
        : uploading && "UPLOAD FAILED"}
    </div>
  );
};

export default Upload;
