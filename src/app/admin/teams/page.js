"use client";
import Teams from "@/app/components/Teams";
import Toolbar from "@/app/components/Toolbar";
import React from "react";

const TeamsPage = () => {
  return (
    <div className="w-11/12">
      <Toolbar />
      <Teams />
    </div>
  );
};

export default TeamsPage;
