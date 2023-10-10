import Volunteer from "@/components/dynamic/forms/Volunteer";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Volunteer" restrictions={{}}>
      <Volunteer />
    </ProtectedPage>
  );
};

export default Page;
