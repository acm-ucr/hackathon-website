import Participant from "@/components/dynamic/forms/Participant";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Participant" restrictions={{}}>
      <Participant />
    </ProtectedPage>
  );
};

export default Page;
