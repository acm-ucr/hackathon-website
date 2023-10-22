import Feedback from "@/components/dynamic/form/Feedback";
import ProtectedPage from "@/components/dynamic/ProtectedPage";
const FeedbackPage = () => {
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

export default FeedbackPage;
