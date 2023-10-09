import Participants from "@/components/dynamic/admin/dashboards/Participants";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const ParticipantsPage = () => {
  return (
    <ProtectedPage
      title="Admin | Participants"
      restrictions={{
        admins: 1,
        participants: [-1, 0, 1],
      }}
    >
      <Participants />
    </ProtectedPage>
  );
};

export default ParticipantsPage;
