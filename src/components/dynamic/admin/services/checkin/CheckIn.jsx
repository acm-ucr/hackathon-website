"use client";
import { useEffect, useState } from "react";
import Title from "../../Title";
import Scanner from "./Scanner";
import Dropdown from "../Dropdown";
import Button from "../../Button";
import toast from "react-hot-toast";
import { api } from "@/utils/api";

const CheckIn = () => {
  const [event, setEvent] = useState({ name: "No events" });
  const [events, setEvents] = useState(null);
  const [code, setCode] = useState(null);

  useEffect(() => {
    api({
      method: "GET",
      url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
    }).then(({ items }) => {
      setEvents(
        items.map((event) => {
          return { id: event.id, name: event.summary, hidden: false };
        })
      );
    });
  }, []);
  const setResult = async (result) => {
    if (result !== code) {
      setCode(result);
      toast("✅ QR Code Scanned");
    }
  };

  const handleCheckIn = async () => {
    if (event === "No Event Selected") {
      toast("❌ Please select an event!");
      return;
    }

    if (!code) {
      toast("❌ Please scan a valid QR code!");
      return;
    }

    const [user, date] = code.split("&");
    const delta = Math.round((new Date() - new Date(date)) / 1000);

    // TODO: CHANGE TO 5 SECONDS ONCE DEPLOYED
    if (delta < 5000) {
      const { items } = await api({
        method: "GET",
        url: `/api/checkin?uid=${user}`,
      });

      if (items.includes(event.id)) {
        toast("❌ Already Checked In!");
        return;
      }

      api({
        method: "PUT",
        url: "/api/checkin",
        body: { uid: user, event: event.id, name: event.name },
      }).then(() => toast(`✅ Checked in for ${event.name}`));
    } else {
      toast("❌ Expired QR code!");
      return;
    }
  };

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Check In" />
      <div className="grid grid-cols-1">
        <div className="p-3 flex flex-col items-center">
          {events && (
            <Dropdown
              option={event}
              setOption={setEvent}
              options={events}
              setOptions={setEvents}
              empty="no events"
            />
          )}
          <Scanner setResult={setResult} />
          <div>{code && code.split("&")[2]}</div>
          <Button
            text="Check In"
            color="green"
            onClick={handleCheckIn}
            size="text-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckIn;
