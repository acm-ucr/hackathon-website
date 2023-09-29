import Feedback from "@/components/forms/Feedback";
import ProtectedPage from "@/components/ProtectedPage";
const FeedbackPage = () => {
  return (
    <ProtectedPage title="Admin | Feedback" restrictions={["admins"]}>
      <Feedback />
    </ProtectedPage>
  );
};

export default FeedbackPage;
