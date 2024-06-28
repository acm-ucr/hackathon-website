import ProtectedPage from "@/components/ProtectedPage";
import Join from "@/components/user/join/Join";

const Page = ({ params }) => {
  const capitalizeFirstLetter = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  return (
    <ProtectedPage
      title={`User | Join | ${capitalizeFirstLetter(params.teamID)}`}
      restrictions={{
        participants: [-1, 0, 1],
      }}
    >
      <Join 
        params={params}
      />
    </ProtectedPage>
  )
};

export default Page;
