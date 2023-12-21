import Messenger from "@/components/dynamic/admin/services/Messenger";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const MessengerPage = () => {
  return (
    <ProtectedPage
      title="Admin | Messenger"
      restrictions={{
        admins: 1,
        committees: 1,
      }}
    >
      <div className="w-full justify-center bg-hackathon-page z-0 h-screen">
        <Messenger />
      </div>
    </ProtectedPage>
  );
};

export default MessengerPage;
