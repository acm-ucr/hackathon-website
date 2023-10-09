import ProtectedPage from "@/components/dynamic/ProtectedPage";
import Statistics from "@/components/dynamic/admin/services/statistics/Statistics";
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
