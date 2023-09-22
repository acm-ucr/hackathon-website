import Volunteer from "@/components/forms/volunteers";
import ProtectedPage from "@/components/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | volunteers" restrictions={[]}>
      <Volunteer />
    </ProtectedPage>
  );
};

export default Page;
