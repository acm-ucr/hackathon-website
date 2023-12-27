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

const AdminPagesSpecs = {
  admins: {
    pageName: "Admins",
    protectedPageRestrictions: { admins: 1 },
    component: <Admins />,
  },
  calendar: {
    pageName: "Calendar",
    protectedPageRestrictions: { admins: 1, committees: 1 },
    component: <Events />,
  },
  checkin: {
    pageName: "Check In",
    protectedPageRestrictions: { admins: 1 },
    component: <CheckIn />,
  },
  committees: {
    pageName: "Committees",
    protectedPageRestrictions: { admins: 1 },
    component: <Committees />,
  },
  feedback: {
    pageName: "Feedback",
    protectedPageRestrictions: { admins: 1 },
    component: <Feedback />,
  },
  interests: {
    pageName: "Interests",
    protectedPageRestrictions: { admins: 1 },
    component: <Interests />,
  },
  judges: {
    pageName: "Judges",
    protectedPageRestrictions: { admins: 1 },
    component: <Judges />,
  },
  judging: {
    pageName: "Judging",
    protectedPageRestrictions: { admins: 1 },
    component: <Judging />,
  },
  mentors: {
    pageName: "Mentors",
    protectedPageRestrictions: { admins: 1 },
    component: <Mentors />,
  },
  messenger: {
    pageName: "Messenger",
    protectedPageRestrictions: { admins: 1 },
    component: <Messenger />,
  },
  participants: {
    pageName: "Participants",
    protectedPageRestrictions: { admins: 1 },
    component: <Participants />,
  },
  prizes: {
    pageName: "Prizes",
    protectedPageRestrictions: { admins: 1 },
    component: <Prizes />,
  },
  sponsors: {
    pageName: "Sponsors",
    protectedPageRestrictions: { admins: 1, committees: 1 },
    component: <Sponsors />,
  },
  statistics: {
    pageName: "Statistics",
    protectedPageRestrictions: { admins: 1, committees: 1 },
    component: <Statistics />,
  },
  teams: {
    pageName: "Teams",
    protectedPageRestrictions: { admins: 1 },
    component: <Teams />,
  },
  volunteers: {
    pageName: "Volunteers",
    protectedPageRestrictions: { admins: 1, committees: 1 },
    component: <Volunteers />,
  },
};

export default AdminPagesSpecs;
