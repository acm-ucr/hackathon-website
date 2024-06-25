import ProtectedPage from "@/components/ProtectedPage";
import Schedule from "@/components/user/schedule/Schedule";

const Page = () => {
  return (
    <ProtectedPage
      title="User | Schedule"
      restrictions={{
        participants: [1, 0, -1],
      }}
    >
      <Schedule />
    </ProtectedPage>
  );
};

export default Page;
