import Participant from "@/components/forms/Participant";
import ProtectedPage from "@/components/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Participant" restrictions={{}}>
      <Participant />
    </ProtectedPage>
  );
};

export default Page;
