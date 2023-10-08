import ProtectedPage from "@/components/dynamic/ProtectedPage";
import Judging from "@/components/dynamic/admin/services/judging/Judging";

const Page = () => {
  return (
    <ProtectedPage
      title="Admin | Judging"
      restrictions={{
        admins: 1,
      }}
    >
      <Judging />
    </ProtectedPage>
  );
};

export default Page;
