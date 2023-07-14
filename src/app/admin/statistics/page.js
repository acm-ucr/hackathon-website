import React from "react";
import Title from "@/components/Title";
import PieChart from "@/components/PieChart";

const StatisticsPage = () => {
  return (
    <div className="h-screen w-full">
      <title>Admin | Statistics</title>
      <Title title="Statistics" />
      <PieChart />
    </div>
  );
};

export default StatisticsPage;
