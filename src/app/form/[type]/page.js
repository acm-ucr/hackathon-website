import Admin from "@/components/form/Admin";
import Committee from "@/components/form/Committee";
import Feedback from "@/components/form/Feedback";
import Interest from "@/components/form/Interest";
import Judge from "@/components/form/Judge";
import Mentor from "@/components/form/Mentor";
import Participant from "@/components/form/Participant";
import Sponsor from "@/components/form/Sponsor";
import Volunteer from "@/components/form/Volunteer";
import Panel from "@/components/form/Panelist";
import Lead from "@/components/form/Lead";
import ProtectedPage from "@/components/ProtectedPage";
import Fault from "@/utils/error";

const Page = ({ params }) => {
  const components = {
    admin: <Admin />,
    committee: <Committee />,
    feedback: <Feedback />,
    interest: <Interest />,
    judge: <Judge />,
    mentor: <Mentor />,
    participant: <Participant />,
    sponsor: <Sponsor />,
    panel: <Panel />,
    volunteer: <Volunteer />,
    lead: <Lead />,
  };

  const capitalizeFirstLetter = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  if (components.hasOwnProperty(params.type)) {
    return (
      <ProtectedPage
        title={`Form | ${capitalizeFirstLetter(params.type)}`}
        restrictions={{}}
      >
        {components[params.type]}
      </ProtectedPage>
    );
  } else {
    throw new Fault(
      404,
      "Page Not Found",
      "The page you are looking for does not seem to exist"
    );
  }
};

export default Page;
