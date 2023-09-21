import Admin from "@/components/forms/admins";
import ProtectedPage from "@/components/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | admins" restrictions={[]}>
      <Admin />
    </ProtectedPage>
  );
};

export default Page;
