"use client";
import Participants from "@/components/Admin/Participants";
import React from "react";
import ProtectedPage from "@/components/ProtectedPage";

const ParticipantsPage = () => {
  return (
    <ProtectedPage title="Admin | Participants" restrictions={["admin"]}>
      <div className="w-11/12">
        <Participants />
      </div>
    </ProtectedPage>
  );
};

export default ParticipantsPage;
