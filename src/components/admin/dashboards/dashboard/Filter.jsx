import { memo } from "react";
import { Plus } from "lucide-react";

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
          : f,
      );
    });
  };

  return (
    <div className="flex w-full justify-center" onClick={onClick}>
      <div
        className={`rounded duration-300 hover:opacity-70 ${
          isActive
            ? "bg-hackathon-blue-100 text-white"
            : "bg-white text-hackathon-blue-100"
        } flex w-full cursor-pointer items-center justify-between`}
        data-cy={status + "-filter"}
      >
        <p className="mx-1 my-0 whitespace-nowrap px-1 py-[2px]">{status}</p>
        <Plus
          className={`mr-2 mt-[2px] duration-300 hover:opacity-80 ${
            isActive ? "-rotate-45" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default memo(Filter);
