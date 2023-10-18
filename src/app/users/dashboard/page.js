import ProtectedPage from "@/components/dynamic/ProtectedPage";
import Dashboard from "@/components/dynamic/user/Dashboard";

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
