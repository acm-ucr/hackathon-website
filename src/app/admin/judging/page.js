import React from "react";
import ProtectedPage from "@/components/ProtectedPage";
import Judges from "@/components/Admin/Judges";

const Page = () => {
  return (
    <ProtectedPage title="Admin | Judging" restrictions={["admin"]}>
      <Judges />
    </ProtectedPage>
  );
};

export default Page;
