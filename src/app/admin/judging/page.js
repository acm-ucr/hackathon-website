import React from "react";
import ProtectedPage from "@/components/ProtectedPage";
import Judges from "@/components/Admin/Judges";

const Page = () => {
  return (
    <ProtectedPage title="Admin | Judging" restrictions={["admin"]}>
      <div className="w-11/12">
        <Judges />
      </div>
    </ProtectedPage>
  );
};

export default Page;
