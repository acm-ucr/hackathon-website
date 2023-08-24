import ProtectedPage from "@/components/ProtectedPage";
import Events from "@/components/Admin/Calendar/Events";

const Page = () => {
  return (
    <ProtectedPage title="Admin | Calendar" restrictions={["admin"]}>
      <Events />
    </ProtectedPage>
  );
};

export default Page;
