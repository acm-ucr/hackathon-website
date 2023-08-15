import React from "react";
import ProtectedPage from "@/components/ProtectedPage";
import Dashboard from "@/components/User/Dashboard";

const Page = () => {
  return (
    <ProtectedPage title="User | Dashboard" restrictions={["hacker"]}>
      <div className="w-11/12">
        <Dashboard />
      </div>
    </ProtectedPage>
  );
};

export default Page;
