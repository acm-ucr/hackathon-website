"use client";
import Filters from "@/app/components/Filters";
import Teams from "@/app/components/Teams";
import Toolbar from "@/app/components/Toolbar";
import React from "react";

const TeamsPage = () => {
  return (
    <div>
      <Filters />
      <Toolbar />
      <Teams />
    </div>
  );
};

export default TeamsPage;
