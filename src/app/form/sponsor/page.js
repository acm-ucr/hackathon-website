import Sponsor from "@/components/dynamic/form/Sponsor";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Sponsor" restrictions={{}}>
      <Sponsor />
    </ProtectedPage>
  );
};

export default Page;
