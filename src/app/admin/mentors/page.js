"use client";
import Mentors from "@/components/admin/dashboards/Mentors";
import ProtectedPage from "@/components/ProtectedPage";
const MentorsPage = () => {
  return (
    <ProtectedPage title="Admin | Mentors" restrictions={["admin"]}>
      <Mentors />
    </ProtectedPage>
  );
};

export default MentorsPage;
