import Mentor from "@/components/forms/mentors";
import ProtectedPage from "@/components/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | mentors" restrictions={[]}>
      <Mentor />
    </ProtectedPage>
  );
};

export default Page;
