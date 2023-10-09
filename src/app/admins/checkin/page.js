import ProtectedPage from "@/components/dynamic/ProtectedPage";
import CheckIn from "@/components/dynamic/admin/services/checkin/CheckIn";

const Page = () => {
  return (
    <ProtectedPage
      title="Admin | Check In"
      restrictions={{
        admins: 1,
        participants: [-1, 0, 1],
      }}
    >
      <CheckIn />
    </ProtectedPage>
  );
};

export default Page;
