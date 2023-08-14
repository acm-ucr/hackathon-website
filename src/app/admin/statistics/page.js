import React from "react";
import Title from "@/components/Admin/Title";
import Label from "@/components/Label.jsx";
import PieChart from "@/components/Admin/PieChart";
import ProtectedPage from "@/components/ProtectedPage";

const StatisticsPage = () => {
  const rowsWithLabels = [
    ["status", "major", "gender"],
    ["grade", "food", "check-in"],
    ["labelA", "labelB", "labelC"],
  ];

  return (
    <ProtectedPage title="Admin | Statistics" restrictions={["admin"]}>
      <div className="h-screen w-full">
        <Title title="Statistics" />
        {rowsWithLabels.map((rowLabels, rowIndex) => (
          <div className="flex flex-row" key={rowIndex}>
            {rowLabels.map((label, columnIndex) => (
              <div className="w-full " key={columnIndex}>
                <Label label={label} />
                <PieChart />
              </div>
            ))}
          </div>
        ))}
      </div>
    </ProtectedPage>
  );
};

export default StatisticsPage;
