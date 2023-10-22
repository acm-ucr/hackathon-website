import Judge from "@/components/dynamic/form/Judge";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Judge" restrictions={{}}>
      <Judge />
    </ProtectedPage>
  );
};

export default Page;
