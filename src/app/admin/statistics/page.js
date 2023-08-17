import React from "react";
import Title from "@/components/Admin/Title";
import PieChart from "@/components/Admin/PieChart";
import ProtectedPage from "@/components/ProtectedPage";
import Tag from "@/components/Admin/Tag";

const StatisticsPage = () => {
  const rowsWithLabels = [
    ["status", "major", "gender"],
    ["grade", "food", "check-in"],
    ["labelA", "labelB", "labelC"],
  ];
  const data = [
    {
      id: "rejected",
      label: "rejected",
      value: 34,
    },
    {
      id: "accepted",
      label: "accepted",
      value: 56,
    },
    {
      id: "pending",
      label: "pending",
      value: 56,
    },
  ];
  return (
    <ProtectedPage title="Admin | Statistics" restrictions={["admin"]}>
      <div className="h-screen w-full">
        <Title title="Statistics" />
        {rowsWithLabels.map((rowLabels, rowIndex) => (
          <div className="flex flex-row" key={rowIndex}>
            {rowLabels.map((label, columnIndex) => (
              <div className="w-full " key={columnIndex}>
                <Tag text={label} withHover={false} color="student" />
                <PieChart data={data} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </ProtectedPage>
  );
};

export default StatisticsPage;
