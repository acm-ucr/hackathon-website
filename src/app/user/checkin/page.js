import ProtectedPage from "@/components/ProtectedPage";
import CheckinPage from "@/components/user/CheckIn";

const Page = () => {
  return (
    <ProtectedPage
      title="User | CheckIn"
      restrictions={{
        participants: [-1, 0, 1],
      }}
    >
      <CheckinPage />
    </ProtectedPage>
  );
};

export default Page;
