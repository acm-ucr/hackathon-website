// Import necessary types
import React from "react";
import ProtectedPage from "@/components/ProtectedPage";
import Find from "@/components/user/find/Find";

// Define types for ProtectedPage props
// interface ProtectedPageProps {
//   title: string;
//   restrictions: {
//     participants: number[];
//   };
// }

// Define the Page component with TypeScript
const Page: React.FC = () => {
  return (
    <ProtectedPage
      title="User | Find"
      restrictions={{
        participants: [1, 0, -1],
      }}
    >
      <Find />
    </ProtectedPage>
  );
};

export default Page;
