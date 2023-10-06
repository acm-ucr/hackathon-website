import Participants from "@/components/admin/dashboards/Participants";
import ProtectedPage from "@/components/ProtectedPage";

const ParticipantsPage = () => {
  return (
    <ProtectedPage
      title="Admin | Participants"
      restrictions={{
        admins: 1,
      }}
    >
      <Participants />
    </ProtectedPage>
  );
};

export default ParticipantsPage;
