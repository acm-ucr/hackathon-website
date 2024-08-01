import ProtectedPage from "@/components/ProtectedPage";
import Resources from "@/components/user/resources/Resources";

const Page = () => {
  return (
    <ProtectedPage
      title="User | Resources"
      restrictions={{
        participants: [1],
      }}
    >
      <Resources />
    </ProtectedPage>
  );
};

export default Page;
