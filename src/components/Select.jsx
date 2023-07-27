import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Select = ({ options, user, field, setUser, placeholder }) => {
  return (
    <Dropdown className="w-full">
      <Dropdown.Toggle className="focus:bg-white w-full hover:text-hackathon-darkgray hover:bg-hackathon-green-100 items-center flex text-hackathon-darkgray border-0">
        <p className="w-11/12 text-start">{user[field] || placeholder}</p>
      </Dropdown.Toggle>
      <Dropdown.Menu className="w-full bg-hackathon-green-100">
        {options.map((option, index) => (
          <>
            <Dropdown.Item
              className=" hover:bg-hackathon-green-200"
              key={index}
              onClick={() => setUser({ ...user, [field]: option })}
            >
              {option}
            </Dropdown.Item>
            <div className="h-[1px] bg-hackathon-gray" />
          </>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Select;
