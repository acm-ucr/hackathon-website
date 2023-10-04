import ProtectedPage from "@/components/ProtectedPage";
import Judges from "@/components/admin/dashboards/Judges";

const Page = () => {
  return (
    <ProtectedPage
      title="Admin | Judges"
      restrictions={{
        admins: 1,
        committees: 1,
      }}
    >
      <Judges />
    </ProtectedPage>
  );
};

export default Page;
