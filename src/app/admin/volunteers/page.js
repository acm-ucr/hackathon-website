"use client";
import Volunteers from "@/components/Admin/Volunteers";
import React from "react";
import ProtectedPage from "@/components/ProtectedPage";
const VolunteersPage = () => {
  return (
    <ProtectedPage title="Admin | Volunteers" restrictions={["admin"]}>
      <Volunteers />
    </ProtectedPage>
  );
};

export default VolunteersPage;
