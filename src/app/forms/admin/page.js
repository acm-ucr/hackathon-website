import Admin from "@/components/Forms/Admin";
import ProtectedPage from "@/components/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Admin" restrictions={[]}>
      <Admin />
    </ProtectedPage>
  );
};

export default Page;
