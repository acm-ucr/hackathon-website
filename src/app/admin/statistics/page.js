import React from "react";
import Title from "@/components/Title";
import Label from "@/components/Label.jsx";
import PieChart from "@/components/PieChart";
import ProtectedPage from "@/components/ProtectedPage";

const StatisticsPage = () => {
  const rowsWithLabels = [
    ["status", "major", "gender"],
    ["grade", "food", "check-in"],
    ["labelA", "labelB", "labelC"],
  ];
  const renderRows = () => {
    return rowsWithLabels.map((rowLabels, rowIndex) => (
      <div className="flex flex-row" key={rowIndex}>
        {rowLabels.map((label, columnIndex) => (
          <div className="w-full " key={columnIndex}>
            <Label label={label} />
            <PieChart />
          </div>
        ))}
      </div>
    ));
  };
  return (
    <ProtectedPage title="Admin | Statistics" restrictions={["admin"]}>
      <div className="h-screen w-full">
        <Title title="Statistics" />
        {renderRows()}
      </div>
    </ProtectedPage>
  );
};

export default StatisticsPage;
