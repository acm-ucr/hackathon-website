import ProtectedPage from "@/components/ProtectedPage";
import Dashboard from "@/components/user/Dashboard";

const Page = () => {
  return (
    <ProtectedPage title="User | Dashboard" restrictions={[]}>
      <Dashboard />
    </ProtectedPage>
  );
};

export default Page;
