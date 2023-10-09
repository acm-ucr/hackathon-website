import ProtectedPage from "@/components/dynamic/ProtectedPage";
import Committees from "@/components/dynamic/admin/dashboards/Committees";

const AdminPage = () => {
  return (
    <ProtectedPage
      title="Admin | Committees"
      restrictions={{
        admins: 1,
      }}
    >
      <Committees />
    </ProtectedPage>
  );
};

export default AdminPage;
