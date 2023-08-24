"use client";
import Participants from "@/components/Admin/Participants";
import ProtectedPage from "@/components/ProtectedPage";

const ParticipantsPage = () => {
  return (
    <ProtectedPage title="Admin | Participants" restrictions={["admin"]}>
      <Participants />
    </ProtectedPage>
  );
};

export default ParticipantsPage;
