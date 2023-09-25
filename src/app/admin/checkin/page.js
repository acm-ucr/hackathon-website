"use client";
import ProtectedPage from "@/components/ProtectedPage";
import CheckIn from "@/components/admin/services/checkin/CheckIn";

const Page = () => {
  return (
    <ProtectedPage title="Admin | Check In" restrictions={["admins"]}>
      <CheckIn />
    </ProtectedPage>
  );
};

export default Page;
