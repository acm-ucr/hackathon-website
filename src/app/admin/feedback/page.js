import Feedback from "@/components/admin/dashboards/Feedback";
import ProtectedPage from "@/components/ProtectedPage";
const FeedbackPage = () => {
  return (
    <ProtectedPage title="Admin | Feedback" restrictions={["admins"]}>
      <Feedback />
    </ProtectedPage>
  );
};

export default FeedbackPage;
