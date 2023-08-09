import React, { useState } from "react";
import { BsCircleFill, BsCircle } from "react-icons/bs";
import { FaPencil, FaCheck } from "react-icons/fa6";

const Radio = ({ text, field, options, user, setUser, editable = false }) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    setEdit(false);
  };

  const handleClick = (option) => {
    setUser({ ...user, [field]: option });
  };

  return (
    <div className="flex flex-col mt-3">
      <p className="mb-0">{text}</p>
      {editable && !edit && (
        <FaPencil className="hover:cursor-pointer" onClick={handleEdit} />
      )}
      {editable && edit && (
        <FaCheck className="hover:cursor-pointer" onClick={handleSave} />
      )}
      {editable && !edit && <div>{user[field]}</div>}
      {(!editable || (editable && edit)) && (
        <div className="flex flex-wrap">
          {options.map((option, index) => (
            <div
              className="flex items-center px-1 w-1/4 hover:cursor-pointer"
              key={index}
              onClick={() => handleClick(option)}
            >
              {option === user[field] ? (
                <BsCircleFill className="mx-1 w-3.5 h-3.5 text-hackathon-green-300 border-[1.5px] p-0.5 rounded-full border-black" />
              ) : (
                <BsCircle className="mx-1 h-3.5 w-3.5" />
              )}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Radio;
