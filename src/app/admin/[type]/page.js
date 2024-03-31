"use client";
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
import Panelists from "@/components/dynamic/admin/dashboards/Panelists";
import Statistics from "@/components/dynamic/admin/services/statistics/Statistics";
import Teams from "@/components/dynamic/admin/dashboards/Teams";
import Volunteers from "@/components/dynamic/admin/dashboards/Volunteers";
import Leads from "@/components/dynamic/admin/dashboards/Leads";
import Fault from "@/utils/error";
import Settings from "@/components/dynamic/admin/services/settings/Settings";

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
