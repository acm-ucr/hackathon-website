"use client";
import { useEffect, useState } from "react";
import Title from "../../Title";
import Scanner from "./Scanner";
import Select from "@/components/Select";
import Button from "../../Button";
import toaster from "@/utils/toaster";
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
        }),
      );
    });
  }, []);
  const setResult = async (result) => {
    if (result !== code) {
      setCode(result);
      toaster("QR Code Scanned", "success");
    }
  };

  const handleCheckIn = async () => {
    if (event.name === "No events") {
      toaster("Please select an event!", "error");
      return;
    }

    if (!code) {
      toaster("Please scan a valid QR code!", "error");
      return;
    }

    const [user, date] = code.split("&");
    const delta = Math.round((new Date() - new Date(date)) / 1000);

    if (delta < 5000) {
      const { items } = await api({
        method: "GET",
        url: `/api/checkin?uid=${user}`,
      });

      if (items.includes(event.id)) {
        toaster("Already Checked In!", "error");
        return;
      }

      api({
        method: "PUT",
        url: "/api/checkin",
        body: { uid: user, event: event.id, name: event.name },
      }).then(() => toaster(`Checked in for ${event.name}`, "success"));
    } else {
      toaster("Expired QR code!", "error");
      return;
    }
  };

  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Title title="Check In" />
      <div className="grid flex-grow grid-cols-1 overflow-auto">
        <div
          className="flex flex-col items-center gap-3 p-3"
          style={{ flexGrow: 1, overflow: "hidden" }}
        >
          {events && (
            <Select
              items={events}
              user={event}
              setUser={setEvent}
              placeholder="Select Events"
              userFn={(event) => setEvent(event)}
            />
          )}
          <div
            className="flex w-full flex-col items-center justify-center"
            style={{ maxHeight: "85vh", width: "90%", overflow: "hidden" }}
          >
            <Scanner
              setResult={setResult}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div>{code && code.split("&")[2]}</div>
        </div>
      </div>

      <div
        className="flex flex-shrink-0 justify-center p-6"
        style={{ paddingTop: "5px", paddingBottom: "10px" }}
      >
        <Button
          text="Check in"
          color="green"
          onClick={handleCheckIn}
          size="text-xl"
        />
      </div>
    </div>
  );
};

export default CheckIn;
