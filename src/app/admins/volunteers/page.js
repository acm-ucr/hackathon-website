import Volunteers from "@/components/dynamic/admin/dashboards/Volunteers";
import ProtectedPage from "@/components/dynamic/ProtectedPage";
const VolunteersPage = () => {
  return (
    <ProtectedPage
      title="Admin | Volunteers"
      restrictions={{
        admins: 1,
        committees: 1,
      }}
    >
      <Volunteers />
    </ProtectedPage>
  );
};

export default VolunteersPage;
