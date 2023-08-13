import React from "react";

const BodyInput = ({ body, setBody, sendEmail }) => {
  return (
    <div className="w-full h-full bg-white rounded-2xl my-2 flex flex-col p-2 pb-4 items-center">
      <p className="w-11/12 text-xl font-extrabold mb-1">body</p>
      <textarea
        className="w-11/12 h-full border-2 rounded-md p-2"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <div className="flex w-11/12 justify-end">
        <button
          className=" py-1 hover:opacity-50 text-lg font-bold w-1/6 rounded-xl bg-hackathon-green-300 mt-3 text-white "
          onClick={sendEmail}
        >
          send email
        </button>
      </div>
    </div>
  );
};

export default BodyInput;
