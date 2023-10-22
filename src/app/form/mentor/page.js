import Mentor from "@/components/dynamic/form/Mentor";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Mentor" restrictions={{}}>
      <Mentor />
    </ProtectedPage>
  );
};

export default Page;
