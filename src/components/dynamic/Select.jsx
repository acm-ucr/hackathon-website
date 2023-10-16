import Dropdown from "react-bootstrap/Dropdown";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";

const Toggle = ({ onClick, user, field, show, placeholder }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        user[field] ? "text-black" : "text-hackathon-gray-200"
      } bg-white flex items-center justify-between w-full border-b-2 border-black`}
      data-cy="select-toggle"
    >
      {user[field] || placeholder}
      <RiArrowDownSLine
        className={`${show && "rotate-180"} duration-300 text-black`}
        data-cy="select-arrow"
      />
    </button>
  );
};
const Select = ({
  options,
  user,
  field,
  setUser,
  placeholder,
  title,
  editable = true,
  required,
}) => {
  const [show, setShow] = useState(false);
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
            show={show}
            as={Toggle}
            user={user}
            field={field}
            placeholder={placeholder}
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
          <Dropdown.Menu className="w-full bg-hackathon-green-100 !border-none !rounded-none !p-0 overflow-y-auto max-h-[35vh]">
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
