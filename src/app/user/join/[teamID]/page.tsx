import ProtectedPage from "@/components/ProtectedPage";
import Join from "@/components/user/join/Join";

type teamIdProps = {
  teamID: string;
};

type props = {
  params: teamIdProps;
};

const Page = ({ params }: props) => {
  return (
    <ProtectedPage
      title="User | Join"
      restrictions={{
        participants: [1],
      }}
    >
      <Join params={params} />
    </ProtectedPage>
  );
};

export default Page;
