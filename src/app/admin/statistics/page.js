"use client";
import ProtectedPage from "@/components/ProtectedPage";
import Statistics from "@/components/Admin/Services/Statistics";
const StatisticsPage = () => {
  return (
    <ProtectedPage title="Admin | Statistics" restrictions={["admin"]}>
      <Statistics />
    </ProtectedPage>
  );
};

export default StatisticsPage;
