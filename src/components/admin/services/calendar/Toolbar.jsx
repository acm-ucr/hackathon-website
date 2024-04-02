import { LABELS } from "@/data/admin/Calendar.js";
import Tag from "../../Tag.jsx";
import { COLORS } from "@/data/Tags.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useCallback, useEffect } from "react";

const CustomToolbar = ({ onView, onNavigate, date, view, setTag }) => {
  const handleShortcuts = useCallback(
    (e) => {
      switch (e.key) {
        case "ArrowRight":
          onNavigate("NEXT");
          break;
        case "ArrowLeft":
          onNavigate("PREV");
          break;
      }
    },
    [onNavigate]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleShortcuts);
    return () => document.removeEventListener("keydown", handleShortcuts);
  }, [handleShortcuts]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center my-2">
          <FaChevronLeft
            onClick={() => onNavigate("PREV")}
            className="hover:cursor-pointer mx-2"
          />
          <p className="mb-0 text-3xl font-semibold">
            {date.toLocaleString("default", { month: "short" })}{" "}
            {date.getFullYear()}
          </p>
          <FaChevronRight
            onClick={() => onNavigate("NEXT")}
            className="hover:cursor-pointer mx-2"
          />
        </div>
        <div className="flex justify-center items-center">
          <Tag
            onClick={() => onView("month")}
            text="month"
            color={view === "month" ? COLORS["green"] : COLORS["gray"]}
            classes="mx-2"
          />
          <Tag
            onClick={() => onView("week")}
            text="week"
            color={view === "week" ? COLORS["green"] : COLORS["gray"]}
            classes="mx-2"
          />
        </div>
      </div>
      <div className="flex flex-col items-end">
        <Tag
          text="all events"
          color={COLORS["gray"]}
          classes="my-1"
          onClick={() => setTag("all")}
        />
        <div className="flex justify-end items-center flex-wrap gap-x-2">
          {Object.entries(LABELS)
            .filter(([_, { type }]) => type === "leads")
            .map(([key, { color }], index) => (
              <Tag
                key={index}
                text={key}
                color={COLORS[color]}
                classes="my-1"
                onClick={() => setTag(key)}
              />
            ))}
        </div>
        <div className="flex justify-evenly items-center flex-wrap gap-x-2">
          {Object.entries(LABELS)
            .filter(([_, { type }]) => type !== "leads")
            .map(([key, { color }], index) => (
              <Tag
                key={index}
                text={key}
                color={COLORS[color]}
                classes="my-1"
                onClick={() => setTag(key)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CustomToolbar;
