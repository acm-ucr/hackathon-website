import Feedback from "@/components/dynamic/form/Feedback";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Feedback" restrictions={{}}>
      <Feedback />
    </ProtectedPage>
  );
};

export default Page;
