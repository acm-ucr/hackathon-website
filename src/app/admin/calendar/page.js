import ProtectedPage from "@/components/ProtectedPage";
import Events from "@/components/admin/services/calendar/Events";

const Page = () => {
  return (
    <ProtectedPage
      title="Admin | Calendar"
      restrictions={["admins", "committees"]}
    >
      <Events />
    </ProtectedPage>
  );
};

export default Page;
