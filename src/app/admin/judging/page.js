import React from "react";
import ProtectedPage from "@/components/ProtectedPage";

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
