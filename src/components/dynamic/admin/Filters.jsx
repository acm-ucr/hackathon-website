"use client";
import { TiPlus } from "react-icons/ti";
import { useEffect } from "react";

const Filters = ({ filters, setFilters, setObjects, objects, input }) => {
  const handleClick = (filter) => {
    const filterValues = {
      ...filters,
      [filter]: { ...filters[filter], state: !filters[filter].state },
    };
    setFilters(filterValues);

    setObjects &&
      objects &&
      setObjects(
        objects.map((a) => {
          let rowIsHidden = true;
          Object.values(filterValues).map(({ value, state }) => {
            if (
              a.status === value &&
              state &&
              a.name.toLowerCase().match(input.toLowerCase())
            ) {
              rowIsHidden = false;
            }
          });
          return { ...a, hidden: rowIsHidden };
        })
      );
  };

  const handleFilterKeys = (e) => {
    if (e.repeat) return;
    console.log("event", e);
    Object.entries(filters).map(([filter, { state }], index) => {
      if (e.key == index + 1) {
        handleClick(filter);
      }
    });
  };

  useEffect(() => {
    document.addEventListener("keyup", handleFilterKeys);
    return () => document.removeEventListener("keyup", handleFilterKeys);
  }, [filters, objects]);

  return (
    <div className="w-fit grid grid-cols-6 gap-2">
      {Object.entries(filters).map(([filter, { state }], index) => (
        <div
          className="flex justify-center"
          key={index}
          onClick={() => handleClick(filter)}
          data-cy={filter + "-filter"}
        >
          <div
            className={`rounded hover:opacity-70 duration-300 ${
              state
                ? "text-white bg-hackathon-blue-100"
                : "text-hackathon-blue-100 bg-white"
            } cursor-pointer flex items-center justify-between w-full`}
          >
            <p className="my-0 mx-1 px-1 py-[2px] whitespace-nowrap">
              {filter}
            </p>
            <TiPlus
              className={`duration-300 mt-[2px] mr-2 hover:opacity-80 ${
                state ? "-rotate-45" : ""
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filters;
