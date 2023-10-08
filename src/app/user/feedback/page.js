import ProtectedPage from "@/components/dynamic/ProtectedPage";
import Feedback from "@/components/dynamic/forms/Feedback";

const Page = () => {
  return (
    <ProtectedPage
      title="User | Feedback"
      restrictions={{
        participants: [-1, 0, 1],
      }}
    >
      <Feedback />
    </ProtectedPage>
  );
};

export default Page;
