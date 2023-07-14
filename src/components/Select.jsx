import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FaChevronDown } from "react-icons/fa";

const Select = ({ options, user, field, setUser, placeholder }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle>
        {user[field] || placeholder}
        <FaChevronDown />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => setUser({ ...user, [field]: option })}
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Select;
