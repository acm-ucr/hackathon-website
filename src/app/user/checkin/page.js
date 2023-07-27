import React from "react";
import ProtectedPage from "@/components/ProtectedPage";
import CheckinPage from "@/components/CheckIn";

const Page = () => {
  return (
    <ProtectedPage title="User | CheckIn" restrictions={["hacker"]}>
      <CheckinPage />
    </ProtectedPage>
  );
};

export default Page;
