"use client";
import Mentors from "@/components/Admin/Mentors";
import React from "react";
import ProtectedPage from "@/components/ProtectedPage";
const MentorsPage = () => {
  return (
    <ProtectedPage title="Admin | Mentors" restrictions={["admin"]}>
      <div className="w-11/12">
        <title>Admin | Mentors</title>
        <Mentors />
      </div>
    </ProtectedPage>
  );
};

export default MentorsPage;
