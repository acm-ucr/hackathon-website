import ProtectedPage from "@/components/ProtectedPage";
import Judging from "@/components/admin/services/Judging";

const Page = () => {
  return (
    <ProtectedPage title="Admin | Judging" restrictions={["admin"]}>
      <Judging />
    </ProtectedPage>
  );
};

export default Page;
