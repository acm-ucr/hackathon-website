import Prizes from "@/components/admin/services/Prizes";
import ProtectedPage from "@/components/ProtectedPage";

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
