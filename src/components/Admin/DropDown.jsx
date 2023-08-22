import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { RiArrowDownSLine } from "react-icons/ri";
const Toggle = ({ children, onClick, show }) => {
  return (
    <button
      onClick={onClick}
      className="relative z-50 bg-white text-black w-full border-2 rounded-full border-black justify-between flex items-center px-3 py-1"
    >
      {children}
      <RiArrowDownSLine className={`${show && "rotate-180"} duration-300`} />
    </button>
  );
};
const Menu = ({ children, className, setOptions, reset }) => {
  const [value, setValue] = useState("");
  return (
    <div className={className}>
      <input
        autoFocus
        className="mx-3 my-2 w-11/12 focus:ring-0 !outline-0, border-gray-300 border-[1px] text-sm px-2 py-1"
        placeholder="Type to filter..."
        onChange={(e) => {
          setValue(e.target.value);
          setOptions(
            reset.filter((option) =>
              option.toLowerCase().includes(e.target.value)
            )
          );
        }}
        value={value}
      />
      {children}
    </div>
  );
};
const DropDown = ({ options, setOption, option, setOptions, reset }) => {
  const [show, setShow] = useState(false);
  return (
    <Dropdown
      onToggle={() => {
        setShow(!show);
      }}
      show={show}
      autoClose={true}
      className="w-full m-0 bg-white rounded-3xl"
    >
      <Dropdown.Toggle show={show} as={Toggle}>
        {option}
      </Dropdown.Toggle>
      <Dropdown.Menu
        as={Menu}
        setOptions={setOptions}
        reset={reset}
        className="max-h-[50vh] overflow-scroll w-full bg-white border-none !rounded-b-xl !rounded-t-none border-2 border-black p-0 !z-10 !-mt-4 pt-4"
      >
        {options.length > 0 ? (
          options.map((currOoption, index) => (
            <Dropdown.Item
              className=" hover:!bg-hackathon-green-200 bg-transparent overflow-hidden px-3 py-1 last:rounded-b-xl"
              key={index}
              onClick={() => setOption(currOoption)}
            >
              {currOoption}
            </Dropdown.Item>
          ))
        ) : (
          <p className="px-3 text-gray-400">no info</p>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
