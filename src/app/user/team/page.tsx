import ProtectedPage from "@/components/ProtectedPage";
import Team from "@/components/user/team/Team";

const Page = () => {
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
