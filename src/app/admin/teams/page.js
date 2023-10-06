import Teams from "@/components/admin/dashboards/Teams";
import ProtectedPage from "@/components/ProtectedPage";
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
