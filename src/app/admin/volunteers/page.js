"use client";
import Volunteers from "@/components/admin/dashboards/Volunteers";
import ProtectedPage from "@/components/ProtectedPage";
const VolunteersPage = () => {
  return (
    <ProtectedPage
      title="Admin | Volunteers"
      restrictions={["admin", "committee"]}
    >
      <Volunteers />
    </ProtectedPage>
  );
};

export default VolunteersPage;
