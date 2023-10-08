import Committee from "@/components/dynamic/forms/Committee";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Committee" restrictions={{}}>
      <Committee />
    </ProtectedPage>
  );
};

export default Page;
