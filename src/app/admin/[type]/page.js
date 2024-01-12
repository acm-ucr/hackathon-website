import ProtectedPage from "@/components/dynamic/ProtectedPage";
import Admins from "@/components/dynamic/admin/dashboards/Admins";
import Events from "@/components/dynamic/admin/services/calendar/Events";
import CheckIn from "@/components/dynamic/admin/services/checkin/CheckIn";
import Committees from "@/components/dynamic/admin/dashboards/Committees";
import Feedback from "@/components/dynamic/admin/dashboards/Feedback";
import Interests from "@/components/dynamic/admin/dashboards/Interests";
import Judges from "@/components/dynamic/admin/dashboards/Judges";
import Judging from "@/components/dynamic/admin/services/judging/Judging";
import Mentors from "@/components/dynamic/admin/dashboards/Mentors";
import Contacts from "@/components/dynamic/admin/services/contacts/Contacts";
import Participants from "@/components/dynamic/admin/dashboards/Participants";
import Sponsors from "@/components/dynamic/admin/dashboards/Sponsors";
import Statistics from "@/components/dynamic/admin/services/statistics/Statistics";
import Teams from "@/components/dynamic/admin/dashboards/Teams";
import Volunteers from "@/components/dynamic/admin/dashboards/Volunteers";
import Fault from "@/utils/error";

const Page = ({ params }) => {
  const components = {
    admins: <Admins />,
    calendar: <Events />,
    checkin: <CheckIn />,
    committees: <Committees />,
    feedback: <Feedback />,
    interests: <Interests />,
    judges: <Judges />,
    judging: <Judging />,
    mentors: <Mentors />,
    contacts: <Contacts />,
    participants: <Participants />,
    sponsors: <Sponsors />,
    statistics: <Statistics />,
    teams: <Teams />,
    volunteers: <Volunteers />,
  };

  const capitalizeFirstLetter = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  if (components.hasOwnProperty(params.type)) {
    return (
      <ProtectedPage
        title={`Admin | ${capitalizeFirstLetter(params.type)}`}
        restrictions={{ admins: 1 }}
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
