import ProtectedPage from "@/components/ProtectedPage";
import Team from "@/components/user/team/Team";
import React from "react";

const Page: React.FC = () => {
  return (
    <ProtectedPage
      title="User | Team"
      restrictions={{
        participants: [1],
      }}
    >
      <Team />
    </ProtectedPage>
  );
};

export default Page;
