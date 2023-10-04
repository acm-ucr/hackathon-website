import ProtectedPage from "@/components/ProtectedPage";
import Statistics from "@/components/admin/services/Statistics";
const StatisticsPage = () => {
  return (
    <ProtectedPage
      title="Admin | Statistics"
      restrictions={{
        admins: 1,
        committees: 1,
      }}
    >
      <Statistics />
    </ProtectedPage>
  );
};

export default StatisticsPage;
