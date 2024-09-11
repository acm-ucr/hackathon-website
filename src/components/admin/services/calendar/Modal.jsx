import { X, MapPin, User } from "lucide-react";
import Tag from "../../Tag";
import { LABELS } from "@/data/admin/Calendar";
import { COLORS } from "@/data/Tags";

const CalendarModal = ({ event, setEvent }) => {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl">
      <div
        className={`bg-hackathon-red-200 flex items-center justify-between rounded-t-xl p-3 ${event.color}`}
      >
        <span className="text-3xl font-bold text-white">{event.summary}</span>
        <X
          onClick={() => setEvent(null)}
          className="text-xl text-white hover:cursor-pointer hover:!text-red-500"
        />
      </div>
      <div className="border-hackathon-darkgray rounded-b-xl border-x-2 border-b-2 bg-white px-3 py-2">
        <div className="flex items-center justify-between">
          <div>
            {event.startDate.toLocaleString("default", {
              month: "long",
              weekday: "long",
              day: "2-digit",
              year: "numeric",
            })}
            <br />
            {event.startDate.toLocaleString("default", {
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
        <div className="my-2 flex items-center">
          <MapPin className="mr-2" />
          {event.location ? event.location : "No Location Specified"}
        </div>
        <div className="my-2 flex items-center">
          <User className="mr-2" />
          {event.assignee}
        </div>
        <p className="mb-0">{event.description.split("\n")[1]}</p>
      </div>
    </div>
  );
};

export default CalendarModal;
