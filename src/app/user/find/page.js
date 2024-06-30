import ProtectedPage from "@/components/ProtectedPage";
import Find from "@/components/user/find/Find";

const Page = () => {
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
