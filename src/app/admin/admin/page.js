import ProtectedPage from "@/components/ProtectedPage";
import Admins from "@/components/Admin/Admins";

const AdminPage = () => {
  return (
    <ProtectedPage title="Admin | Admin" restrictions={["admin"]}>
      <Admins />
    </ProtectedPage>
  );
};

export default AdminPage;
