import ProtectedPage from "@/components/dynamic/ProtectedPage";
import CheckinPage from "@/components/dynamic/user/CheckIn";

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
