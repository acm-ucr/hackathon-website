import React from "react";
import Title from "@/components/Title";
import PieChart from "@/components/PieChart";
import ProtectedPage from "@/components/ProtectedPage";

const StatisticsPage = () => {
  return (
    <ProtectedPage title="Admin | Statistics" restrictions={["admin"]}>
      <div className="h-screen w-full">
        <Title title="Statistics" />
        <PieChart />
      </div>
    </ProtectedPage>
  );
};

export default StatisticsPage;
