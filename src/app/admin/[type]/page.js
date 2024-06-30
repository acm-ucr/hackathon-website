"use client";
import ProtectedPage from "@/components/ProtectedPage";
import Admins from "@/components/admin/dashboards/Admins";
import Events from "@/components/admin/services/calendar/Events";
import CheckIn from "@/components/admin/services/checkin/CheckIn";
import Committees from "@/components/admin/dashboards/Committees";
import Feedback from "@/components/admin/dashboards/Feedback";
import Interests from "@/components/admin/dashboards/Interests";
import Judges from "@/components/admin/dashboards/Judges";
import Judging from "@/components/admin/services/judging/Judging";
import Mentors from "@/components/admin/dashboards/Mentors";
import Contacts from "@/components/admin/services/contacts/Contacts";
import Participants from "@/components/admin/dashboards/Participants";
import Sponsors from "@/components/admin/dashboards/Sponsors";
import Panelists from "@/components/admin/dashboards/Panelists";
import Statistics from "@/components/admin/services/statistics/Statistics";
import Teams from "@/components/admin/dashboards/Teams";
import Volunteers from "@/components/admin/dashboards/Volunteers";
import Leads from "@/components/admin/dashboards/Leads";
import Fault from "@/utils/error";
import Settings from "@/components/admin/services/settings/Settings";

const Page = ({ params, searchParams }) => {
  const components = {
    admins: <Admins searchParams={searchParams} />,
    calendar: <Events />,
    checkin: <CheckIn />,
    committees: <Committees searchParams={searchParams} />,
    feedback: <Feedback searchParams={searchParams} />,
    interests: <Interests searchParams={searchParams} />,
    judges: <Judges searchParams={searchParams} />,
    judging: <Judging />,
    mentors: <Mentors searchParams={searchParams} />,
    contacts: <Contacts />,
    participants: <Participants searchParams={searchParams} />,
    settings: <Settings />,
    sponsors: <Sponsors searchParams={searchParams} />,
    panelists: <Panelists searchParams={searchParams} />,
    statistics: <Statistics />,
    teams: <Teams searchParams={searchParams} />,
    volunteers: <Volunteers searchParams={searchParams} />,
    leads: <Leads searchParams={searchParams} />,
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
