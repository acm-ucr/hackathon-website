"use client";
import Participants from "@/components/Participants";
import React from "react";
import { useSession } from "next-auth/react";
import ProtectedPage from "@/components/ProtectedPage";

const ParticipantsPage = () => {
  const session = useSession();
  console.log(session);

  if (session?.data?.user?.role === "admin") {
    return (
      <ProtectedPage title="Admin | Participants" restrictions={["admin"]}>
        <div className="w-11/12">
          <title>Admin | Participants</title>
          <Participants />
        </div>
      </ProtectedPage>
    );
  } else return <p>You are not authorized to view this page!</p>;
};

export default ParticipantsPage;
