import ProtectedPage from "@/components/ProtectedPage";
import Join from "@/components/user/join/Join";

const Page = ({ params }) => {
  return (
    <ProtectedPage
      title="User | Join"
      restrictions={{
        participants: [-1, 0, 1],
      }}
    >
      <Join params={params} />
    </ProtectedPage>
  );
};

export default Page;
