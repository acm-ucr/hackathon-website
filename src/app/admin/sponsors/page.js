import Sponsors from "@/components/dynamic/admin/dashboards/Sponsors";
import ProtectedPage from "@/components/dynamic/ProtectedPage";
const SponsorsPage = () => {
  return (
    <ProtectedPage
      title="Admin | Sponsors"
      restrictions={{
        admins: 1,
        committees: 1,
      }}
    >
      <Sponsors />
    </ProtectedPage>
  );
};

export default SponsorsPage;
