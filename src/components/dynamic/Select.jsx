import { RiArrowDownSLine } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

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
  const ref = useRef(null);
  const parent = useRef(null);

  const { getTotalSize, getVirtualItems, measureElement } = useVirtualizer({
    count: options.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 50,
    measureElement: (el) => {
      if (el.innerText.length > 45) return 50;
      else return 35;
    },
  });

  const handleClickOutside = ({ target }) => {
    if (parent.current && !parent.current.contains(target)) {
      setShow(false);
    }
  };

  const handleInput = (e) => {
    setOptions(
      items.filter((name) =>
        name.toLowerCase().search(e.target.value.toLowerCase()) === -1
          ? false
          : true
      )
    );

    setInput(e.target.value);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={parent}>
      <p className="mb-1 font-semibold">
        {title}
        {required && <span className="text-red-500">*</span>}
      </p>
      <button
        disabled={!editable}
        onClick={() => setShow(!show)}
        className={`${
          !user[field] && "text-hackathon-gray-200"
        } bg-transparent flex items-center justify-between w-full border-b-[1px] border-white pb-1`}
        data-cy="select-toggle"
      >
        {user[field] || placeholder}
        {editable && (
          <RiArrowDownSLine
            className={`${show && "rotate-180"} duration-300 text-black`}
            data-cy="select-arrow"
          />
        )}
      </button>
      {show && (
        <div className="relative">
          <div
            ref={ref}
            className="absolute overflow-y-scroll bg-hackathon-green-100 w-full h-fit max-h-[35vh]"
            data-cy="select-menu"
          >
            {searchable && (
              <input
                value={input}
                autoFocus
                className="my-1 w-full ring-0 outline-none px-2 py-2 bg-hackathon-green-100 sticky top-0 left-0 z-10"
                placeholder="search"
                onChange={handleInput}
              />
            )}
            {options.length === 0 && (
              <div className="p-2 text-hackathon-gray-200">
                No Options Available
              </div>
            )}
            <div
              className="w-full relative"
              style={{
                height: `${getTotalSize()}px`,
              }}
            >
              {getVirtualItems().map((virtualRow) => {
                const name = options[virtualRow.index];

                return (
                  <div
                    className="absolute top-0 left-0 w-full hover:bg-hackathon-green-200 hover:cursor-pointer flex items-center px-2"
                    key={virtualRow.index}
                    data-index={virtualRow.index}
                    ref={measureElement}
                    onClick={() => {
                      setUser({ ...user, [field]: name });
                      setShow(false);
                    }}
                    style={{
                      height: `${virtualRow.size}px`,
                      transform: `translateY(${virtualRow.start}px)`,
                    }}
                  >
                    {name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
