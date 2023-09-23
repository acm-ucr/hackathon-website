import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

const Select = ({
  options,
  setOptions,
  user,
  field,
  setUser,
  placeholder,
  title,
  editable = true,
  searchable = false,
}) => {
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
    <div className="mt-3">
      <p className="mb-1">{title}</p>
      <Dropdown className="w-full m-0">
        {editable ? (
          <Dropdown.Toggle
            id="dropdown-toggle"
            className={`!bg-white ${
              user[field] ? "text-black" : "!text-hackathon-gray-200"
            } w-full !text-left !border-x-0 !border-t-0 !border-b-2 !rounded-none !border-black`}
          >
            {user[field] || placeholder}
          </Dropdown.Toggle>
        ) : (
          <div
            id="dropdown-toggle"
            className={`placeholder:text-hackathon-gray-200 ${
              user[field] ? "text-black" : "!text-hackathon-placeholder"
            } w-full pl-3 !border-x-0 !border-t-0 !border-b-2 !rounded-none !border-black`}
          >
            {user[field] || placeholder}
          </div>
        )}
        {editable && (
          <Dropdown.Menu className="w-full bg-hackathon-green-100 !border-none !rounded-none !p-0 overflow-y-auto max-h-[35vh]">
            {searchable && (
              <input
                autoFocus
                className="mx-1.5 my-1 w-11/12 ring-0 outline-none px-2 py-1"
                placeholder="Search"
                onChange={handleInput}
                value={value}
              />
            )}

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
