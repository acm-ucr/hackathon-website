import { LABELS } from "@/data/dynamic/admin/Calendar.js";
import Tag from "../../Tag.jsx";
import { COLORS } from "@/data/dynamic/Tags.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const CustomToolbar = ({
  onView,
  onNavigate,
  date,
  events,
  setEvents,
  view,
}) => {
  const onClick = (value) => {
    if (value === "all") {
      setEvents(
        events.map((event) => {
          event.hidden = false;
          return event;
        })
      );
    } else {
      setEvents(
        events.map((event) => {
          if (
            event.description.split("\n")[1].split(": ")[1].toLowerCase() ===
            value
          ) {
            event.hidden = false;
          } else {
            event.hidden = true;
          }
          return event;
        })
      );
    }
  };

  return (
    <div className="grid grid-cols-3">
      <div className="flex items-center">
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
      <div className="flex justify-center items-center">
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
      <div className="flex justify-evenly items-center flex-wrap">
        {Object.entries(LABELS).map(([label, value], index) => (
          <Tag
            key={index}
            text={label}
            color={COLORS[value.color]}
            classes="my-1"
            onClick={() => onClick(label)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomToolbar;
