import React from "react";
import ProtectedPage from "@/components/ProtectedPage";
import Admissions from "@/components/Admin/Admissions";

const Page = () => {
  return (
    <ProtectedPage title="Admin | Admission" restrictions={["admin"]}>
      <Admissions />
    </ProtectedPage>
  );
};

export default Page;
