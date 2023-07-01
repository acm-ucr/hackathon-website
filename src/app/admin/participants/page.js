import Filter from "@/app/components/Filter";
import Participants from "@/app/components/Participants";
import Toolbar from "@/app/components/Toolbar";
import React from "react";

const ParticipantsPage = () => {
  return (
    <div>
      <Filter />
      <Toolbar />
      <Participants />
    </div>
  );
};

export default ParticipantsPage;
