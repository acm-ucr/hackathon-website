import React from "react";
import { FaTimes } from "react-icons/fa";

const SubjectInput = ({ subject, setSubject }) => {
  return (
    <div className="flex items-center my-1">
      <p className="text-xl font-extrabold ml-10 mr-5 my-0">subject</p>
      <input
        value={subject}
        placeholder="subject"
        type="text"
        className="w-full font-poppins text-lg py-1 px-4 rounded-sm"
        onChange={(e) => {
          setSubject(e.target.value);
        }}
      />
      <FaTimes
        className="hover:cursor-pointer text-xl mx-2"
        onClick={() => {
          setSubject("");
        }}
      />
    </div>
  );
};

export default SubjectInput;
