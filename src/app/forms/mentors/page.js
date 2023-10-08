import Mentor from "@/components/dynamic/forms/Mentor";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Mentor" restrictions={{}}>
      <Mentor />
    </ProtectedPage>
  );
};

export default Page;
