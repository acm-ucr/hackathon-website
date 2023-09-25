"use client";
import Teams from "@/components/admin/dashboards/Teams";
import ProtectedPage from "@/components/ProtectedPage";
const TeamsPage = () => {
  return (
    <ProtectedPage title="Admin | Teams" restrictions={["admins"]}>
      <Teams />
    </ProtectedPage>
  );
};

export default TeamsPage;
