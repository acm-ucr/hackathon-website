"use client";
import { useEffect, useState } from "react";
import Title from "../../Title";
import Scanner from "./Scanner";
import DropDown from "../DropDown";
import Button from "../../Button";
import toast from "react-hot-toast";
import axios from "axios";

const CheckIn = () => {
  const [event, setEvent] = useState({ name: "No Event Selected" });
  const [events, setEvents] = useState(null);
  const [code, setCode] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`
      )
      .then((response) => {
        setEvents(
          response.data.items.map((event) => {
            return { id: event.id, name: event.summary, hidden: false };
          })
        );
      });
  }, []);

  const setResult = async (result) => {
    setCode(result);
    toast("✅ QR Code Scanned");
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
      const response = await axios.get(`/api/checkin?uid=${user}`);

      if (response.data.items.includes(event.id)) {
        toast("❌ Already Checked In!");
        return;
      }

      axios
        .put("/api/checkin", { uid: user, event: event.id })
        .then(() => toast(`✅ Checked in for ${event.name}`));
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
            <DropDown
              option={event}
              setOption={setEvent}
              options={events}
              setOptions={setEvents}
            />
          )}
          <Scanner setResult={setResult} />
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
