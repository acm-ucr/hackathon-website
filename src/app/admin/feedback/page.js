import Feedback from "@/components/dynamic/admin/dashboards/Feedback";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage
      title="Admin | Feedback"
      restrictions={{
        admins: 1,
      }}
    >
      <Feedback />
    </ProtectedPage>
  );
};

export default Page;
