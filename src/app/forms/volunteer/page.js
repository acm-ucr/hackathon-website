import Volunteer from "@/components/forms/Volunteer";
import ProtectedPage from "@/components/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Volunteer" restrictions={{}}>
      <Volunteer />
    </ProtectedPage>
  );
};

export default Page;
