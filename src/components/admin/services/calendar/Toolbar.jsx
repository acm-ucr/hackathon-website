import { LABELS } from "@/data/admin/Calendar";
import Tag from "../../Tag";
import { COLORS } from "@/data/Tags";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    [onNavigate],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleShortcuts);
    return () => document.removeEventListener("keydown", handleShortcuts);
  }, [handleShortcuts]);

  return (
    <div className="mb-2 flex flex-col items-center justify-between md:flex-row">
      <div className="flex flex-col items-center">
        <div className="my-2 flex items-center justify-center">
          <ChevronLeft
            onClick={() => onNavigate("PREV")}
            className="mx-2 hover:cursor-pointer"
          />
          <p className="mb-0 text-3xl font-semibold">
            {date.toLocaleString("default", { month: "short" })}{" "}
            {date.getFullYear()}
          </p>
          <ChevronRight
            onClick={() => onNavigate("NEXT")}
            className="mx-2 hover:cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-center">
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
      <div className="flex flex-col items-center md:items-end">
        <Tag
          text="all events"
          color={COLORS["gray"]}
          classes="my-1"
          onClick={() => setTag("all")}
        />
        <div className="flex flex-col md:block">
          <div className="flex flex-wrap items-center justify-center gap-x-2 md:justify-end">
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
          <div className="flex flex-wrap items-center justify-center gap-x-2 md:justify-end">
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
    </div>
  );
};

export default CustomToolbar;
