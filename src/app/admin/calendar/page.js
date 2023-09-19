import ProtectedPage from "@/components/ProtectedPage";
import Events from "@/components/admin/services/calendar/Events";

const Page = () => {
  return (
    <ProtectedPage
      title="Admin | Calendar"
      restrictions={["admin", "committee"]}
    >
      <Events />
    </ProtectedPage>
  );
};

export default Page;
