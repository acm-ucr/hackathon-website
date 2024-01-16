import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const PhotoModal = ({ imageString, setState }) => {
  return (
    <div className="font-poppins fixed top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 w-[30vw] border-4 border-black rounded-2xl z-10 bg-gray-200">
      <div className="grid grid-cols-3">
        <div className="grid col-span-2">
          <img src={imageString} alt="Preview" />
        </div>
        <div
          className="flex justify-end text-5xl"
          onClick={() => setState(null)}
        >
          <AiOutlinePlus className=" hover:cursor-pointer rotate-45 text-black" />
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
