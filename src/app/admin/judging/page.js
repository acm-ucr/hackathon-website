import ProtectedPage from "@/components/ProtectedPage";
import Judging from "@/components/admin/services/judging/Judging";

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
