"use client";
import Participants from "@/components/Participants";
import React from "react";
import ProtectedPage from "@/components/ProtectedPage";

const ParticipantsPage = () => {
  return (
    <ProtectedPage title="Admin | Participants" restrictions={["admin"]}>
      <div className="w-11/12">
        <title>Admin | Participants</title>
        <Participants />
      </div>
    </ProtectedPage>
  );
};

export default ParticipantsPage;
