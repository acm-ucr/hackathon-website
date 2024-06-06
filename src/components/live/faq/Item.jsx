import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const Item = ({ title, children }) => {
  const [state, setState] = useState(false);
  return (
    <div>
      <button
        onClick={() => setState(!state)}
        className="flex items-center justify-between w-full py-3 text-lg whitespace-nowrap"
      >
        {title}
        <FaChevronDown className={`${state && "rotate-180"} duration-500 `} />
      </button>
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          state ? "opacity-100 " : "opacity-0 "
        }`}
      >
        {state && <div className={` text-black text-base `}>{children}</div>}
      </div>
    </div>
  );
};

export default Item;
