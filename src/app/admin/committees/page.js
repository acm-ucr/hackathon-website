import ProtectedPage from "@/components/ProtectedPage";
import Committees from "@/components/admin/dashboards/Committees";

const AdminPage = () => {
  return (
    <ProtectedPage title="Admin | Committees" restrictions={["admins"]}>
      <Committees />
    </ProtectedPage>
  );
};

export default AdminPage;
