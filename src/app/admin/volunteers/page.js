"use client";
import Volunteers from "@/components/Admin/Volunteers";
import React from "react";
import ProtectedPage from "@/components/ProtectedPage";
const VolunteersPage = () => {
  return (
    <ProtectedPage title="Admin | Volunteers" restrictions={["admin"]}>
      <div className="w-11/12 h-full">
        <title>Admin | Volunteers</title>
        <Volunteers />
      </div>
    </ProtectedPage>
  );
};

export default VolunteersPage;
