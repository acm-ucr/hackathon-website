import { flexRender } from "@tanstack/react-table";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const Body = ({ getVisibleCells, Dropdown, original }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className="flex px-3 py-2 border-b-[1px] border-hackathon-gray-200">
        {getVisibleCells().map(({ id, column, getContext }) => (
          <div
            className={`flex items-center ${column.columnDef.width}`}
            key={id}
            data-cy={original.uid}
          >
            {flexRender(column.columnDef.cell, getContext())}
          </div>
        ))}
        {Dropdown && (
          <FaChevronDown
            className={`${
              dropdown && "rotate-180"
            } duration-300 hover:cursor-pointer`}
            onClick={() => setDropdown(!dropdown)}
          />
        )}
      </div>
      {dropdown && <Dropdown object={original} />}
    </>
  );
};

export default Body;
