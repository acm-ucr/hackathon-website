import React from "react";
import ProtectedPage from "@/components/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="User | Dashboard" restrictions={["hacker"]}>
      <div>Page</div>;
    </ProtectedPage>
  );
};

export default Page;
