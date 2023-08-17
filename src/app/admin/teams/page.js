"use client";
import Teams from "@/components/Admin/Teams";
import React from "react";
import ProtectedPage from "@/components/ProtectedPage";
const TeamsPage = () => {
  return (
    <ProtectedPage title="Admin | Teams" restrictions={["admin"]}>
      <div className="w-11/12 h-full">
        <Teams />
      </div>
    </ProtectedPage>
  );
};

export default TeamsPage;
