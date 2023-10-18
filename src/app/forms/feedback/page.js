import Feedback from "@/components/dynamic/forms/Feedback";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Feedback" restrictions={{}}>
      <Feedback />
    </ProtectedPage>
  );
};

export default Page;
