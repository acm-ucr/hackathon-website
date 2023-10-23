import Prizes from "@/components/dynamic/admin/services/Prizes";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const ParticipantsPage = () => {
  return (
    <ProtectedPage
      title="Admin | Prizes"
      restrictions={{
        admins: 1,
        committees: 1,
      }}
    >
      <Prizes />
    </ProtectedPage>
  );
};

export default ParticipantsPage;
