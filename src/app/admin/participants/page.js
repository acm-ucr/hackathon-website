"use client";
import Participants from "@/app/components/Participants";
import Toolbar from "@/app/components/Toolbar";
import React from "react";

const ParticipantsPage = () => {
  return (
    <div className="w-11/12">
      <Toolbar />
      <Participants />
    </div>
  );
};

export default ParticipantsPage;
