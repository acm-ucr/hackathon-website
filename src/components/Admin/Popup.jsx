import React from "react";
import Button from "./Button";
import { LiaTimesSolid } from "react-icons/lia";

const Popup = ({ text, callBack, setText, title }) => {
  return (
    <div className="fixed inset-0 bg-black/40 w-screen h-screen flex items-center justify-center">
      <div className="bg-white flex flex-col items-center rounded-lg p-3 gap-3">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg font-bold m-0">{title}</p>
          <LiaTimesSolid
            className="hover:cursor-pointer text-lg"
            onClick={() => setText("")}
          />
        </div>
        <p>{text}</p>
        <div className="w-full flex justify-end gap-3">
          <Button
            color="grayOutline"
            text="cancel"
            size="text-lg"
            onClick={() => setText("")}
          />
          <Button
            color="green"
            text="confirm"
            size="text-lg"
            onClick={() => {
              callBack();
              setText("");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
