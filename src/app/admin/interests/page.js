import ProtectedPage from "@/components/dynamic/ProtectedPage";
import Interests from "@/components/dynamic/admin/dashboards/Interests";

const Page = () => {
  return (
    <ProtectedPage
      title="Admin | Interests"
      restrictions={{
        admins: 1,
        committees: 1,
      }}
    >
      <Interests />
    </ProtectedPage>
  );
};

export default Page;
