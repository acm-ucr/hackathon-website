import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FaPencil, FaCheck } from "react-icons/fa6";

const Select = ({
  options,
  user,
  field,
  setUser,
  placeholder,
  title,
  editable = false,
}) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    setEdit(false);
  };

  return (
    <div className="mt-3">
      <p className="mb-1">{title}</p>
      {editable && !edit && (
        <FaPencil className="hover:cursor-pointer" onClick={handleEdit} />
      )}
      {editable && edit && (
        <FaCheck className="hover:cursor-pointer" onClick={handleSave} />
      )}
      <Dropdown className="w-full m-0">
        <Dropdown.Toggle
          id="dropdown-toggle"
          className={`!bg-white ${
            user[field] ? "text-black" : "!text-hackathon-placeholder"
          } w-full !text-left !border-x-0 !border-t-0 !border-b-2 !rounded-none !border-black`}
        >
          {user[field] || placeholder}
        </Dropdown.Toggle>
        {((editable && edit) || editable === false) && (
          <Dropdown.Menu className="w-full bg-hackathon-green-100 !border-none !rounded-none !p-0">
            {options.map((option, index) => (
              <Dropdown.Item
                className=" hover:!bg-hackathon-green-200 !bg-hackathon-green-100 overflow-hidden"
                key={index}
                onClick={() => setUser({ ...user, [field]: option })}
              >
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
};

export default Select;
