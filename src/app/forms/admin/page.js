import Admin from "@/components/forms/Admin";
import ProtectedPage from "@/components/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Admin" restrictions={[]}>
      <Admin />
    </ProtectedPage>
  );
};

export default Page;
