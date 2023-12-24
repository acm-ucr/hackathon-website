import Admin from "@/components/dynamic/form/Admin";
import Committee from "@/components/dynamic/form/Committee";
import Feedback from "@/components/dynamic/form/Feedback";
import Interest from "@/components/dynamic/form/Interest";
import Judge from "@/components/dynamic/form/Judge";
import Mentor from "@/components/dynamic/form/Mentor";
import Participant from "@/components/dynamic/form/Participant";
import Sponsor from "@/components/dynamic/form/Sponsor";
import Volunteer from "@/components/dynamic/form/Volunteer";
import Error from "@/components/dynamic/Error";
import ProtectedPage from "@/components/dynamic/ProtectedPage";

const Page = ({ params }) => {
  const route = params.type;

  const components = {
    admin: <Admin />,
    committee: <Committee />,
    feedback: <Feedback />,
    interest: <Interest />,
    judge: <Judge />,
    mentor: <Mentor />,
    participant: <Participant />,
    sponsor: <Sponsor />,
    volunteer: <Volunteer />,
  };

  return components[route] ? (
    <ProtectedPage title={`Form | ${route}`} restrictions={{}}>
      {components[route]}
    </ProtectedPage>
  ) : (
    <Error
      code="404"
      error="Page Not Found"
      message="The page you are looking for does not seem to exist."
    />
  );
};

export default Page;
