import Dropdown from "react-bootstrap/Dropdown";
import { RiArrowDownSLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const Toggle = ({ onClick, option, show, placeholder }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        option ? "text-black" : "text-hackathon-gray-200"
      } bg-white flex items-center justify-between w-full border-b-2 border-black`}
      data-cy="select-toggle"
    >
      {option || placeholder}
      <RiArrowDownSLine
        className={`${show && "rotate-180"} duration-300 text-black`}
        data-cy="select-arrow"
      />
    </button>
  );
};

const Select = ({
  items,
  user,
  field,
  setUser,
  placeholder,
  title,
  editable = true,
  required,
  searchable = false,
}) => {
  const [options, setOptions] = useState(items);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOptions(
        options.map((option) => ({
          ...option,
          hidden: !option.name.toLowerCase().includes(input.toLowerCase()),
        }))
      );
    }, 850);

    return () => clearTimeout(timeout);
  }, [input]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <p className="mb-1 font-semibold">
        {title}
        {required && <span className="text-hackathon-green-300">*</span>}
      </p>
      <Dropdown
        show={show}
        className="w-full m-0"
        onToggle={() => setShow(!show)}
        autoClose={true}
        data-cy="select"
      >
        {editable ? (
          <Dropdown.Toggle
            as={Toggle}
            option={user[field]}
            placeholder={placeholder}
            show={show}
          />
        ) : (
          <div
            className={`placeholder:text-hackathon-gray-200 ${
              user[field] ? "text-black" : "!text-hackathon-placeholder"
            } w-full pl-3 !border-x-0 !border-t-0 ${
              editable ? "!border-b-2" : "border-0"
            } !rounded-none !border-black`}
          >
            {user[field] || placeholder}
          </div>
        )}
        {editable && (
          <Dropdown.Menu
            className="w-full !bg-hackathon-green-100 !border-none !rounded-none !p-0 overflow-y-auto max-h-[35vh]"
            data-cy="select-menu"
          >
            {searchable && (
              <input
                value={input}
                autoFocus
                className="mx-1.5 my-1 w-11/12 ring-0 outline-none px-2 py-1 bg-hackathon-green-100"
                placeholder="search"
                onChange={handleInput}
              />
            )}
            {options
              .filter((opt) => !opt.hidden)
              .map((option, index) => (
                <Dropdown.Item
                  className=" hover:!bg-hackathon-green-200 !bg-hackathon-green-100 overflow-hidden"
                  key={index}
                  onClick={() => setUser({ ...user, [field]: option.name })}
                >
                  {option.name}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
};

export default Select;
