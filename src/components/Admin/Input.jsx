import React from "react";
import { MdCancel } from "react-icons/md";

const Input = ({ value, setValue, clear, label, maxLength, placeholder }) => {
  return (
    <div className="flex items-center">
      <p className="text-lg font-extrabold mr-2 my-0">{label}</p>
      <div className="flex items-center my-1 bg-hackathon-gray rounded-md w-full">
        <input
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          type="text"
          className="outline-none w-full font-poppins text-base py-1 bg-transparent px-2"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        {clear && (
          <MdCancel
            className="hover:cursor-pointer text-xl text-hackathon-darkgray mr-2"
            onClick={() => {
              setValue("");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
