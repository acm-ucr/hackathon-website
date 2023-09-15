"use client";
import Prizes from "@/components/admin/services/Prizes";
import ProtectedPage from "@/components/ProtectedPage";

const ParticipantsPage = () => {
  return (
    <ProtectedPage title="Admin | Prizes" restrictions={["admin"]}>
      <Prizes />
    </ProtectedPage>
  );
};

export default ParticipantsPage;
