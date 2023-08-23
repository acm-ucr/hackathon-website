import React from "react";
import Button from "./Button";

const Popup = ({ text, callBack, setText }) => {
  return (
    <div className="fixed inset-0 bg-black/40 w-screen h-screen flex items-center justify-center">
      <div className="bg-white flex flex-col items-center rounded-lg p-3">
        <p>{text}</p>
        <div className="w-full flex justify-evenly">
          <Button
            color="grayOutline"
            text="cancel"
            size="text-lg"
            onClick={() => {
              setText("");
            }}
          />
          <Button
            color="green"
            text="confirm"
            size="text-lg"
            onClick={async () => {
              await callBack();
              setText("");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
