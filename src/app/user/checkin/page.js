import React from "react";
import ProtectedPage from "@/components/ProtectedPage";
import CheckinPage from "@/components/User/CheckIn";

const Page = () => {
  return (
    <ProtectedPage title="User | CheckIn" restrictions={["hacker"]}>
      <div className="w-11/12">
        <CheckinPage />
      </div>
    </ProtectedPage>
  );
};

export default Page;
