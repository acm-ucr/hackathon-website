import Mentor from "@/components/forms/Mentor";
import ProtectedPage from "@/components/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Mentor" restrictions={{}}>
      <Mentor />
    </ProtectedPage>
  );
};

export default Page;
