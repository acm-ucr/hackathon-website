"use client";
import { useState } from "react";
import Title from "../../Title";
import Scanner from "./Scanner";
import Select from "@/components/Select";
import Button from "../../Button";
import toaster from "@/utils/toaster";
import { api } from "@/utils/api";
import { getEvents, getUser } from "./actions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const CheckIn = () => {
  const [event, setEvent] = useState({ name: "No events" });
  const [code, setCode] = useState("");
  const queryClient = useQueryClient();

  const { data: events } = useQuery({
    queryKey: ["events"],
    queryFn: async () => getEvents(),
    refetchOnWindowFocus: false,
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
      toaster("Error checking in!", error);
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
    if (!code) {
      toaster("Please scan a valid QR code!", "error");
      return;
    }

    const [userId, date] = code.split("&");
    console.log("HELLO", process.env.NODE_ENV);
    const delta =
      process.env.NODE_ENV === "development"
        ? Math.round(new Date() - new Date(date)) / 1000
        : Math.round(new Date() - new Date(date));

    if (delta < 5000) {
      queryClient
        .fetchQuery({
          queryKey: ["/admin/checkin/user", userId],
          queryFn: () => getUser(userId),
          staleTime: 0,
        })
        .then((userData) => {
          if (userData.includes(event.id)) {
            toaster("Already Checked In!", "error");
          } else {
            mutation.mutate({ uid: userId, event: event.id, name: event.name });
          }
        })
        .catch((error) => {
          toaster("Error Fetching User Data!", "error");
        });
    } else {
      toaster("Expired QR code!", "error");
      return;
    }
  };

  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Title title="Check In" />
      <div className="grid grid-cols-1 overflow-auto">
        <div className="flex flex-col gap-3 overflow-hidden py-3">
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
        </div>
        <div>{code && code.split("&")[2]}</div>
      </div>

      <div className="flex flex-shrink-0 justify-center p-6">
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
