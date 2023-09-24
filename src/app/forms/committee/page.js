import Committee from "@/components/forms/Committee";
import ProtectedPage from "@/components/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Committees" restrictions={[]}>
      <Committee />
    </ProtectedPage>
  );
};

export default Page;
