"use client";
import { useEffect, useState } from "react";
import Title from "../../Title";
import Scanner from "./Scanner";
import Dropdown from "../Dropdown";
import Button from "../../Button";
import toaster from "@/utils/toaster";
import { api } from "@/utils/api";
import { useQuery, useMutation } from "@tanstack/react-query";

const fetchEvents = () => {
  return api({
    method: "GET",
    url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
  }).then(({ items }) => {
    return items.map((event) => ({
      id: event.id,
      name: event.summary,
      hidden: false,
    }));
  });
};

const fetchUserData = (user) => {
  return api({
    method: "GET",
    url: `/api/checkin?uid=${user}`,
  }).then(({ items }) => items);
};

const CheckIn = () => {
  const [event, setEvent] = useState({ name: "No events" });
  const [events, setEvents] = useState(null);
  const [code, setCode] = useState(null);
  const [user, setUser] = useState(null);

  const { data: eventsData, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  const { data: userData } = useQuery({
    queryKey: ["userData", user],
    queryFn: () => fetchUserData(user),
    enabled: !!user,
  });

  const mutation = useMutation({
    mutationFn: (body) =>
      api({
        method: "PUT",
        url: "/api/checkin",
        body,
      }),
    onSuccess: () => {
      toaster(`Checked in for ${event.name}`, "success");
    },
    onError: (error) => {
      toaster("Error checking in!", "error");
    },
  });

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

    const [userId, date] = code.split("&");
    const delta = Math.round((new Date() - new Date(date)) / 1000);

    if (delta < 5000) {
      setUser(userId);
    } else {
      toaster("Expired QR code!", "error");
      return;
    }
  };

  useEffect(() => {
    if (eventsData) {
      setEvents(eventsData);
    }
  }, [eventsData]);

  useEffect(() => {
    if (userData) {
      if (userData.includes(event.id)) {
        toaster("Already Checked In!", "error");
      } else {
        mutation.mutate({ uid: user, event: event.id, name: event.name });
      }
    }
  }, [userData]);

  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Title title="Check In" />
      <div className="grid grid-cols-1">
        <div className="flex flex-col items-center gap-3 p-3">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            events && (
              <Dropdown
                option={event}
                setOption={setEvent}
                options={events}
                setOptions={setEvents}
                empty="no events"
              />
            )
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
