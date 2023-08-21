"use client";
import React from "react";
import ProtectedPage from "@/components/ProtectedPage";
import Statistics from "@/components/Admin/Statistics";
const StatisticsPage = () => {
  return (
    <ProtectedPage title="Admin | Statistics" restrictions={["admin"]}>
      <Statistics />
    </ProtectedPage>
  );
};

export default StatisticsPage;
