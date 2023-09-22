import ProtectedPage from "@/components/ProtectedPage";
import Dashboard from "@/components/user/Dashboard";

const Page = () => {
  return (
    <ProtectedPage
      title="User | Dashboard"
      restrictions={["hacker", "admins", "committees"]}
    >
      <div className="w-11/12">
        <Dashboard />
      </div>
    </ProtectedPage>
  );
};

export default Page;
