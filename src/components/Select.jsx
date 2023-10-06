import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
const Toggle = ({ option, onClick, placeholder }) => (
  <button
    onClick={onClick}
    id="dropdown-toggle"
    data-cy="select-selected"
    className={`!bg-white ${
      option ? "text-black" : "!text-hackathon-gray-200"
    } w-full !text-left !border-x-0 !border-t-0 !border-b-2 !rounded-none !border-black`}
  >
    {option || placeholder}
  </button>
);
const Select = ({
  defaultOptions,
  user,
  field,
  setUser,
  placeholder,
  title,
  editable = true,
  searchable = false,
}) => {
  const [options, setOptions] = useState(defaultOptions);

  const handleInput = (e) => {
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
    <div className="flex flex-col">
      <p className="mb-1 font-semibold">{title}</p>
      <Dropdown className="w-full m-0">
        {editable ? (
          <Dropdown.Toggle
            as={Toggle}
            option={user[field]}
            placeholder={placeholder}
          />
        ) : (
          <div
            id="dropdown-toggle"
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
          <Dropdown.Menu className="w-full !bg-hackathon-green-100 !border-none !rounded-none !p-0 overflow-y-auto max-h-[35vh]">
            {searchable && (
              <input
                autoFocus
                className="mx-1.5 my-1 w-11/12 ring-0 outline-none px-2 py-1 bg-hackathon-green-100"
                placeholder="Search"
                onChange={handleInput}
              />
            )}

            {options.map(
              (option, index) =>
                !option.hidden && (
                  <Dropdown.Item
                    className=" hover:!bg-hackathon-green-200 !bg-hackathon-green-100 overflow-hidden"
                    key={index}
                    onClick={() => setUser({ ...user, [field]: option.name })}
                  >
                    {option.name}
                  </Dropdown.Item>
                )
            )}
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
};

export default Select;
