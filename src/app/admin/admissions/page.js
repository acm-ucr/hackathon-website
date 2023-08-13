import React from "react";
import ProtectedPage from "@/components/ProtectedPage";
import Admissions from "@/components/Admin/Admissions";

const Page = () => {
  return (
    <ProtectedPage title="Admin | Judging" restrictions={["admin"]}>
      <div className="w-11/12 h-full">
        <Admissions />
      </div>
    </ProtectedPage>
  );
};

export default Page;
