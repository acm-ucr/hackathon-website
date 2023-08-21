import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { RiArrowDownSLine } from "react-icons/ri";

const DropDown = ({ options, setOption, option }) => {
  const [value, setValue] = useState("");
  const Toggle = ({ children, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="relative z-50 bg-white text-black w-full border-2 rounded-full border-black justify-between flex items-center px-3 py-1"
      >
        {children}
        <RiArrowDownSLine />
      </button>
    );
  };
  const Menu = ({ children, className }) => {
    return (
      <div className={className}>
        <input
          autoFocus
          className="mx-3 my-2 w-fit ring-0 outline-none"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        {React.Children.toArray(children).filter(
          (child) =>
            !value || child.props.children.toLowerCase().startsWith(value)
        )}
      </div>
    );
  };
  return (
    <Dropdown className="w-full m-0 bg-white rounded-3xl">
      <Dropdown.Toggle as={Toggle}>{option}</Dropdown.Toggle>
      <Dropdown.Menu
        as={Menu}
        className="w-full bg-white border-none !rounded-b-xl !rounded-t-none border-2 border-black p-0 !z-10 !-mt-4 pt-4"
      >
        {/* <Dropdown.Menu className="w-full bg-white border-none !rounded-b-xl !rounded-t-none border-2 border-black p-0 !z-10 !-mt-4 pt-4"> */}
        {options.map((currOoption, index) => (
          <Dropdown.Item
            className=" hover:!bg-hackathon-green-200 bg-transparent overflow-hidden px-3 py-1 last:rounded-b-xl"
            key={index}
            onClick={() => setOption(currOoption)}
          >
            {currOoption}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
