import Judging from "@/components/Judging";
import React from "react";
import ProtectedPage from "@/components/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Admin | Judging" restrictions={["admin"]}>
      <Judging />
    </ProtectedPage>
  );
};

export default Page;
