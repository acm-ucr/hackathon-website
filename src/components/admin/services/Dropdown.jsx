import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

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
      })),
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
        className="relative m-0 w-full"
        data-cy="dropdown"
        ref={ref}
      >
        <button
          onClick={() => setShow(!show)}
          className="relative z-20 my-1 flex w-full items-center justify-between rounded-md bg-hackathon-gray-100 px-3 py-1"
          data-cy="dropdown-selected"
        >
          {option.name}
          <ChevronDown
            className={`${show && "rotate-180"} duration-300`}
            data-cy="dropdown-arrow"
          />
        </button>
        {show && (
          <div className="absolute !z-10 !-mt-4 max-h-[50vh] w-full overflow-scroll rounded-md !rounded-b-lg !rounded-t-none border-0 bg-white p-0 pt-4">
            <input
              autoFocus
              className="mx-1.5 my-1 w-11/12 px-2 py-1 outline-none ring-0"
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
                    className="overflow-hidden bg-transparent px-3 py-1 last:rounded-b-lg hover:!bg-hackathon-green-300 hover:!text-white"
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
