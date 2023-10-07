import ProtectedPage from "@/components/dynamic/ProtectedPage";
import Admins from "@/components/dynamic/admin/dashboards/Admins";

const AdminPage = () => {
  return (
    <ProtectedPage
      title="Admin | Admins"
      restrictions={{
        admins: 1,
      }}
    >
      <Admins />
    </ProtectedPage>
  );
};

export default AdminPage;
