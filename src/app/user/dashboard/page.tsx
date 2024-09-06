import ProtectedPage from "@/components/ProtectedPage";
import Dashboard from "@/components/user/Dashboard";

const Page = () => {
  return (
    <ProtectedPage
      title="User | Dashboard"
      restrictions={{
        participants: [1, 0, -1],
      }}
    >
      <Dashboard />
    </ProtectedPage>
  );
};

export default Page;
