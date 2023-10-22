import Volunteer from "@/components/dynamic/form/Volunteer";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Volunteer" restrictions={{}}>
      <Volunteer />
    </ProtectedPage>
  );
};

export default Page;
