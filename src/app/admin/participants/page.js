"use client";
import Participants from "@/components/Participants";
import React from "react";
import { useSession } from "next-auth/react";

const ParticipantsPage = () => {
  const session = useSession();
  console.log(session);

  if (session?.data?.user?.role === "admin") {
    return (
      <div className="w-11/12">
        <title>Admin | Participants</title>
        <Participants />
      </div>
    );
  } else return <p>You are not authorized to view this page!</p>;
};

export default ParticipantsPage;
