"use client";
import Teams from "@/components/Teams";
import React from "react";
import ProtectedPage from "@/components/ProtectedPage";
const TeamsPage = () => {
  return (
    <ProtectedPage title="Admin | Teams" restrictions={["admin"]}>
      <div className="w-11/12">
        <title></title>
        <Teams />
      </div>
    </ProtectedPage>
  );
};

export default TeamsPage;
