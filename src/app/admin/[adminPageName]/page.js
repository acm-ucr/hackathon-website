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
import Messenger from "@/components/dynamic/admin/services/Messenger";
import Participants from "@/components/dynamic/admin/dashboards/Participants";
import Prizes from "@/components/dynamic/admin/services/Prizes";
import Sponsors from "@/components/dynamic/admin/dashboards/Sponsors";
import Statistics from "@/components/dynamic/admin/services/statistics/Statistics";
import Teams from "@/components/dynamic/admin/dashboards/Teams";
import Volunteers from "@/components/dynamic/admin/dashboards/Volunteers";

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
    messenger: <Messenger />,
    participants: <Participants />,
    prizes: <Prizes />,
    sponsors: <Sponsors />,
    statistics: <Statistics />,
    teams: <Teams />,
    volunteers: <Volunteers />,
  };

  const pageName = params.adminPageName;
  const displayName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  if (components[pageName] != undefined) {
    return (
      <ProtectedPage
        title={`Admin | ${displayName}`}
        restrictions={{ admins: 1, committees: 1 }}
      >
        {components[pageName]}
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
