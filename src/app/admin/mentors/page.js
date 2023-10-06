import Mentors from "@/components/admin/dashboards/Mentors";
import ProtectedPage from "@/components/ProtectedPage";
const MentorsPage = () => {
  return (
    <ProtectedPage
      title="Admin | Mentors"
      restrictions={{
        admins: 1,
        committees: 1,
      }}
    >
      <Mentors />
    </ProtectedPage>
  );
};

export default MentorsPage;
