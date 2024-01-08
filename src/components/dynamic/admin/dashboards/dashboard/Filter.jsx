import { TiPlus } from "react-icons/ti";

const Filter = ({ value, status, isActive, setFilters }) => {
  const onClick = () => {
    setFilters((prev) => {
      const statuses = prev.find(({ id }) => id === "status")?.value;
      if (!statuses) {
        return prev.concat({
          id: "status",
          value: [value],
        });
      }

      return prev.map((f) =>
        f.id === "status"
          ? {
              id: "status",
              value: isActive
                ? statuses.filter((s) => s !== value)
                : statuses.concat(value),
            }
          : f
      );
    });
  };

  return (
    <div className="flex justify-center" onClick={onClick}>
      <div
        className={`rounded hover:opacity-70 duration-300 ${
          isActive
            ? "text-white bg-hackathon-blue-100"
            : "text-hackathon-blue-100 bg-white"
        } cursor-pointer flex items-center justify-between w-full`}
        data-cy={status + "-filter"}
      >
        <p className="my-0 mx-1 px-1 py-[2px] whitespace-nowrap">{status}</p>
        <TiPlus
          className={`duration-300 mt-[2px] mr-2 hover:opacity-80 ${
            isActive ? "-rotate-45" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Filter;
