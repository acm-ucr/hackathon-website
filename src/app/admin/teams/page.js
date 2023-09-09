"use client";
import Teams from "@/components/Admin/Dashboards/Teams";
import ProtectedPage from "@/components/ProtectedPage";
const TeamsPage = () => {
  return (
    <ProtectedPage title="Admin | Teams" restrictions={["admin"]}>
      <Teams />
    </ProtectedPage>
  );
};

export default TeamsPage;
