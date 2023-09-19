import ProtectedPage from "@/components/ProtectedPage";
import CheckinPage from "@/components/user/CheckIn";

const Page = () => {
  return (
    <ProtectedPage
      title="User | CheckIn"
      restrictions={["hacker", "admin", "committee"]}
    >
      <CheckinPage />
    </ProtectedPage>
  );
};

export default Page;
