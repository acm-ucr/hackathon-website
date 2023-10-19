import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { RiArrowDownSLine } from "react-icons/ri";

const Toggle = ({ option, onClick, show }) => {
  return (
    <button
      onClick={onClick}
      className="my-1 bg-hackathon-gray-100 rounded-md relative z-20 w-full justify-between flex items-center px-3 py-1"
      data-cy="dropdown-selected"
    >
      {option.name}
      <RiArrowDownSLine
        className={`${show && "rotate-180"} duration-300`}
        data-cy="dropdown-arrow"
      />
    </button>
  );
};

const Menu = ({ option, setOption, className, setOptions, options, empty }) => {
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
        placeholder="Type to filter..."
        onChange={handleInput}
        value={value}
        data-cy="dropdown-input"
      />
      {options.filter((opt) => !opt.hidden).length > 0 ? (
        options
          .filter((opt) => !opt.hidden && opt.name !== option.name)
          .map((option, index) => (
            <Dropdown.Item
              data-cy={`dropdown-option-${index}`}
              className=" hover:!bg-hackathon-green-300 hover:!text-white bg-transparent overflow-hidden px-3 py-1 last:rounded-b-lg"
              key={index}
              onClick={() => setOption(option)}
            >
              {option.name}
            </Dropdown.Item>
          ))
      ) : (
        <p className="px-3 text-gray-400">{empty}</p>
      )}
    </div>
  );
};

const DropDown = ({ options, setOptions, option, setOption, empty }) => {
  const [show, setShow] = useState(false);

  return (
    <Dropdown
      onToggle={() => setShow(!show)}
      show={show}
      autoClose={true}
      className="w-full m-0"
      data-cy="dropdown"
    >
      <Dropdown.Toggle show={show} as={Toggle} option={option} />
      <Dropdown.Menu
        as={Menu}
        option={option}
        setOption={setOption}
        options={options}
        setOptions={setOptions}
        empty={empty}
        className="rounded-md border-0 max-h-[50vh] overflow-scroll w-full !rounded-b-lg !rounded-t-none p-0 !z-10 !-mt-4 pt-4"
      />
    </Dropdown>
  );
};

export default DropDown;
