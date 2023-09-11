"use client";
import ProtectedPage from "@/components/ProtectedPage";
import CheckIn from "@/components/Admin/Services/CheckIn";

const Page = () => {
  return (
    <ProtectedPage title="Admin | Check In" restrictions={["admin"]}>
      <CheckIn />
    </ProtectedPage>
  );
};

export default Page;
