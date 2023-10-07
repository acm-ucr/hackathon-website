import Mentors from "@/components/dynamic/admin/dashboards/Mentors";
import ProtectedPage from "@/components/dynamic/ProtectedPage";
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
