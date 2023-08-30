import ProtectedPage from "@/components/ProtectedPage";
import Judges from "@/components/Admin/Judges";

const Page = () => {
  return (
    <ProtectedPage title="Admin | Judges" restrictions={["admin"]}>
      <Judges />
    </ProtectedPage>
  );
};

export default Page;
