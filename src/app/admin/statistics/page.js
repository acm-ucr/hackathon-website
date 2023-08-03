import React from "react";
import Title from "@/components/Title";
import Label from "@/components/Label.jsx";
import PieChart from "@/components/PieChart";
import ProtectedPage from "@/components/ProtectedPage";

const StatisticsPage = () => {
  return (
    <ProtectedPage title="Admin | Statistics" restrictions={["admin"]}>
      <div className="h-screen w-full">
        <Title title="Statistics" />
        <div className="flex flex-row w-full">
          <Label label="status" />
          <PieChart />
          <Label label="major" />
          <PieChart />
        </div>
      </div>
    </ProtectedPage>
  );
};

export default StatisticsPage;
