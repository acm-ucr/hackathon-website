"use client";
import ProtectedPage from "@/components/ProtectedPage";
import Statistics from "@/components/admin/services/Statistics";
const StatisticsPage = () => {
  return (
    <ProtectedPage
      title="Admin | Statistics"
      restrictions={["admins", "committees"]}
    >
      <Statistics />
    </ProtectedPage>
  );
};

export default StatisticsPage;
