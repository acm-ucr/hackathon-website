import { FaTimes } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsPersonFill } from "react-icons/bs";
import Tag from "../../Tag";
import { LABELS } from "@/data/dynamic/admin/Calendar";
import { COLORS } from "@/data/dynamic/Tags";

const CalendarModal = ({ event, setEvent }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-1/2 rounded-xl">
      <div
        className={`flex justify-between items-center p-3 rounded-t-xl bg-hackathon-red-200 ${event.color}`}
      >
        <span className="text-3xl text-white font-bold">{event.summary}</span>
        <FaTimes
          onClick={() => setEvent(null)}
          className="hover:cursor-pointer text-white hover:!text-red-500 text-xl"
        />
      </div>
      <div className="bg-white px-3 rounded-b-xl py-2 border-x-2 border-b-2 border-hackathon-darkgray">
        <div className="flex justify-between items-center">
          <div>
            {event.start.toLocaleString("default", {
              month: "long",
              weekday: "long",
              day: "2-digit",
              year: "numeric",
            })}
            <br />
            {event.start.toLocaleString("default", {
              hour: "numeric",
              minute: "2-digit",
            })}
          </div>
          <div>
            <Tag
              text={event.category}
              color={COLORS[LABELS[event.category].color]}
            />
          </div>
        </div>
        <div className="flex my-2 items-center">
          <FaLocationDot className="mr-2" />
          {event.location ? event.location : "No Location Specified"}
        </div>
        <div className="flex my-2 items-center">
          <BsPersonFill className="mr-2" />
          {event.assignee}
        </div>
        <p className="mb-0">{event.description.split("\n")[1]}</p>
      </div>
    </div>
  );
};

export default CalendarModal;
