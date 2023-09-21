"use client";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

const SortIcon = ({
  index,
  name,
  headers,
  setHeaders,
  setObjects,
  objects,
  setCurrentSort,
  currentSort,
  page,
}) => {
  const handleClick = (state) => {
    if (currentSort === name)
      setHeaders(
        headers.map((header) => {
          if (header.text === name) {
            header.sort = state;
          }
          return header;
        })
      );
    else {
      setHeaders(
        headers.map((header) => {
          if (header.text === currentSort) {
            header.sort = "off";
          } else if (header.text === name) {
            header.sort = state;
          }
          return header;
        })
      );
    }
    setCurrentSort(name);
    setObjects(
      objects.sort((a, b) => {
        if (state === "up") {
          if (name === "status") return a[name][page] > b[name][page] ? -1 : 1;
          return a[name] > b[name] ? -1 : 1;
        } else if (state === "down") {
          if (name === "status") return b[name][page] > a[name][page] ? -1 : 1;
          return b[name] > a[name] ? -1 : 1;
        }
      })
    );
  };

  return (
    <div className="mx-2">
      <TbTriangleFilled
        data-cy={`${name}-sort-up`}
        className={`${
          headers[index].sort === "up"
            ? " text-hackathon-blue-100"
            : "hover:opacity-50"
        } text-[8px] hover:cursor-pointer`}
        onClick={() => handleClick("up")}
      />
      <TbTriangleInvertedFilled
        data-cy={`${name}-sort-down`}
        onClick={() => handleClick("down")}
        className={`${
          headers[index].sort === "down"
            ? " text-hackathon-blue-100"
            : "hover:opacity-50"
        } text-[8px] hover:cursor-pointer`}
      />
    </div>
  );
};

export default SortIcon;
