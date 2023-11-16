import Interest from "@/components/dynamic/form/Interest";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Interest" restrictions={{}}>
      <Interest />
    </ProtectedPage>
  );
};

export default Page;
