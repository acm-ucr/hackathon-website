import React from "react";
import Title from "@/components/Title";
import PieChart from "@/components/PieChart";
import ProtectedPage from "@/components/ProtectedPage";

const StatisticsPage = () => {
  return (
    <ProtectedPage title="Admin | Statistics" restrictions={["admin"]}>
      <div className="h-screen w-full">
        <Title title="Statistics" />
        <div className="flex flex-row w-full">
          <PieChart />
          <PieChart />
        </div>
      </div>
    </ProtectedPage>
  );
};

export default StatisticsPage;
