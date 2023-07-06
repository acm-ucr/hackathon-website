"use client";
import Filters from "@/app/components/Filters";
import Teams from "@/app/components/Teams";
import Toolbar from "@/app/components/Toolbar";
import React from "react";
import Title from "@/app/components/Title";

const TeamsPage = () => {
  return (
    <div className="w-11/12">
      <div className="flex">
        <Title title="Teams" />
        <Filters />
      </div>
      <Toolbar />
      <Teams />
    </div>
  );
};

export default TeamsPage;
