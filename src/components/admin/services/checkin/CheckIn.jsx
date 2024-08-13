"use client";
import { useEffect, useState } from "react";
import Title from "../../Title";
import Scanner from "./Scanner";
import Select from "@/components/Select";
import Button from "../../Button";
import toaster from "@/utils/toaster";
import { api } from "@/utils/api";
import { getEvents, getUser } from "./actions";
import { useMutation, useQuery } from "@tanstack/react-query";

const CheckIn = () => {
  const [event, setEvent] = useState({ name: "No events" });
  const [code, setCode] = useState("");
  const [user, setUser] = useState(null);

  const { data: events } = useQuery({
    queryKey: ["events"],
    queryFn: async () => getEvents(),
  });

  const { data: userData } = useQuery({
    queryKey: ["/adin/checkin/user", user],
    queryFn: () => getUser(user),
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

  const setResult = (result) => {
    if (result !== code) {
      setCode(result);
      toaster("QR Code Scanned", "success");
    }
  };

  const handleCheckIn = () => {
    if (event.name === "No events") {
      toaster("Please select an event!", "error");
      return;
    }

    if (code === "") {
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
          {events && (
            <Select
              items={events}
              user={event}
              setUser={setEvent}
              placeholder="Select Events"
              userFn={(event) => setEvent(event)}
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
