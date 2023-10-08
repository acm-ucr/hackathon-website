import Teams from "@/components/dynamic/admin/dashboards/Teams";
import ProtectedPage from "@/components/dynamic/ProtectedPage";
const TeamsPage = () => {
  return (
    <ProtectedPage
      title="Admin | Teams"
      restrictions={{
        admins: 1,
      }}
    >
      <Teams />
    </ProtectedPage>
  );
};

export default TeamsPage;
