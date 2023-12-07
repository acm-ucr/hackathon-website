import { useState, useEffect, useRef } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const DropDown = ({ options, setOptions, option, setOption, empty }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef(null);

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

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    options && (
      <div
        onToggle={() => setShow(!show)}
        className="w-full m-0 relative"
        data-cy="dropdown"
        ref={ref}
      >
        <button
          onClick={() => setShow(!show)}
          className="my-1 bg-hackathon-gray-100 rounded-md relative z-20 w-full justify-between flex items-center px-3 py-1"
          data-cy="dropdown-selected"
        >
          {option.name}
          <RiArrowDownSLine
            className={`${show && "rotate-180"} duration-300`}
            data-cy="dropdown-arrow"
          />
        </button>
        {show && (
          <div className="bg-white absolute rounded-md border-0 max-h-[50vh] overflow-scroll w-full !rounded-b-lg !rounded-t-none p-0 !z-10 !-mt-4 pt-4">
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
                  <div
                    data-cy={`dropdown-option-${index}`}
                    className=" hover:!bg-hackathon-green-300 hover:!text-white bg-transparent overflow-hidden px-3 py-1 last:rounded-b-lg"
                    key={index}
                    onClick={() => {
                      setOption(option);
                      setShow(false);
                    }}
                  >
                    {option.name}
                  </div>
                ))
            ) : (
              <p className="px-3 text-gray-400">{empty}</p>
            )}
          </div>
        )}
      </div>
    )
  );
};

export default DropDown;
