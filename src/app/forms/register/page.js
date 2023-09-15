import Register from "@/components/forms/Register";
import ProtectedPage from "@/components/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Register" restrictions={[]}>
      <Register />
    </ProtectedPage>
  );
};

export default Page;
