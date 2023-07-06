"use client";
import Filters from "@/app/components/Filters";
import Participants from "@/app/components/Participants";
import Toolbar from "@/app/components/Toolbar";
import React from "react";
import Title from "@/app/components/Title";

const ParticipantsPage = () => {
  return (
    <div className="w-11/12">
      <div className="flex">
        <Title title="Participants" />
        <Filters />
      </div>
      <Toolbar />
      <Participants />
    </div>
  );
};

export default ParticipantsPage;
