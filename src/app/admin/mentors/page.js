"use client";
import Mentors from "@/components/Admin/Mentors";
import React from "react";
import ProtectedPage from "@/components/ProtectedPage";
const MentorsPage = () => {
  return (
    <ProtectedPage title="Admin | Mentors" restrictions={["admin"]}>
      <Mentors />
    </ProtectedPage>
  );
};

export default MentorsPage;
