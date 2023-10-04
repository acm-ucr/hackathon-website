import Volunteers from "@/components/admin/dashboards/Volunteers";
import ProtectedPage from "@/components/ProtectedPage";
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
