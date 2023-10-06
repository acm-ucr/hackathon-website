import ProtectedPage from "@/components/ProtectedPage";
import CheckIn from "@/components/admin/services/checkin/CheckIn";

const Page = () => {
  return (
    <ProtectedPage
      title="Admin | Check In"
      restrictions={{
        admins: 1,
      }}
    >
      <CheckIn />
    </ProtectedPage>
  );
};

export default Page;
