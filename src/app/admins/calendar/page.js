import ProtectedPage from "@/components/dynamic/ProtectedPage";
import Events from "@/components/dynamic/admin/services/calendar/Events";

const Page = () => {
  return (
    <ProtectedPage
      title="Admin | Calendar"
      restrictions={{
        admins: 1,
        committees: 1,
      }}
    >
      <Events />
    </ProtectedPage>
  );
};

export default Page;
