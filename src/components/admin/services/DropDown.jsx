import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { RiArrowDownSLine } from "react-icons/ri";

const Toggle = ({ option, onClick, show }) => {
  return (
    <button
      onClick={onClick}
      className="relative z-50 bg-white text-black w-full border-2 rounded-lg border-black justify-between flex items-center px-3 py-1"
    >
      {option}
      <RiArrowDownSLine className={`${show && "rotate-180"} duration-300`} />
    </button>
  );
};

const Menu = ({ setOption, className, setOptions, options }) => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
    setOptions(
      options.map((option) => ({
        ...option,
        hidden: !option.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase()),
      }))
    );
  };

  return (
    <div className={className}>
      <input
        autoFocus
        className="mx-1.5 my-1 w-11/12 ring-0 outline-none px-2 py-1"
        placeholder="Search"
        onChange={handleInput}
        value={value}
      />
      {options.filter((opt) => !opt.hidden).length > 0 ? (
        options
          .filter((opt) => !opt.hidden)
          .map((option, index) => (
            <Dropdown.Item
              className=" hover:!bg-hackathon-green-200 bg-transparent overflow-hidden px-3 py-1 last:rounded-b-lg"
              key={index}
              onClick={() => setOption(option.name)}
            >
              {option.name}
            </Dropdown.Item>
          ))
      ) : (
        <p className="px-3 text-gray-400"></p>
      )}
    </div>
  );
};

const DropDown = ({ options, setOptions, option, setOption }) => {
  const [show, setShow] = useState(false);

  return (
    <Dropdown
      onToggle={() => setShow(!show)}
      show={show}
      autoClose={true}
      className="w-full m-0 bg-white rounded-3xl"
    >
      <Dropdown.Toggle show={show} as={Toggle} option={option} />
      <Dropdown.Menu
        as={Menu}
        setOption={setOption}
        options={options}
        setOptions={setOptions}
        className="max-h-[50vh] overflow-scroll w-full bg-white border-none !rounded-b-lg !rounded-t-none border-2 border-black p-0 !z-10 !-mt-4 pt-4"
      />
    </Dropdown>
  );
};

export default DropDown;
