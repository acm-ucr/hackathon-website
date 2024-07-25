import {
  UserFill,
  UsersFill,
  BarChart2,
  HandRaised,
  HandHeart,
  MessageSquare,
  HelpCircle,
  Badge,
  Gavel,
  Mail,
  Lock,
  Calendar,
  AlertTriangle,
  Search,
  Settings,
  QrCode,
  Handshake,
  Users,
  People,
} from "lucide-react";

const iconStyle = "mr-2";

export const TABS = {
  admin: {
    dropdown: true,
    Dashboards: {
      expand: true,
      mt: "mt-0",
      tabs: [
        {
          name: "participants",
          link: "/admin/participants",
          icon: <UserFill className={iconStyle} />,
        },
        {
          name: "teams",
          link: "/admin/teams",
          icon: <UsersFill className={iconStyle} />,
        },
        {
          name: "judges",
          link: "/admin/judges",
          icon: <Gavel className={iconStyle} />,
        },
        {
          name: "volunteers",
          link: "/admin/volunteers",
          icon: <HandHeart className={iconStyle} />,
        },
        {
          name: "mentors",
          link: "/admin/mentors",
          icon: <HelpCircle className={iconStyle} />,
        },
        {
          name: "admin",
          link: "/admin/admins",
          icon: <Lock className={iconStyle} />,
        },
        {
          name: "committees",
          link: "/admin/committees",
          icon: <Handshake className={iconStyle} />,
        },
        {
          name: "sponsors",
          link: "/admin/sponsors",
          icon: <Badge className={iconStyle} />,
        },
        {
          name: "panelists",
          link: "/admin/panelists",
          icon: <People className={iconStyle} />,
        },
        {
          name: "interests",
          link: "/admin/interests",
          icon: <AlertTriangle className={iconStyle} />,
        },
        {
          name: "feedback",
          link: "/admin/feedback",
          icon: <MessageSquare className={iconStyle} />,
        },
        {
          name: "leads",
          link: "/admin/leads",
          icon: <HandRaised className={iconStyle} />,
        },
      ],
    },
    Services: {
      expand: true,
      mt: "mt-3",
      tabs: [
        {
          name: "calendar",
          link: "/admin/calendar",
          icon: <Calendar className={iconStyle} />,
        },
        {
          name: "contacts",
          link: "/admin/contacts",
          icon: <Mail className={iconStyle} />,
        },
        {
          name: "check in",
          link: "/admin/checkin",
          icon: <QrCode className={iconStyle} />,
        },
        {
          name: "judging",
          link: "/admin/judging",
          icon: <Gavel className={iconStyle} />,
        },
        {
          name: "statistics",
          link: "/admin/statistics",
          icon: <BarChart2 className={iconStyle} />,
        },
        {
          name: "settings",
          link: "/admin/settings",
          icon: <Settings className={iconStyle} />,
        },
      ],
    },
  },
  user: {
    Portal: {
      mt: "mt-0",
      tabs: [
        {
          name: "dashboard",
          link: "/user/dashboard",
          icon: <UserFill className={iconStyle} />,
        },
        {
          name: "checkin",
          link: "/user/checkin",
          icon: <QrCode className={iconStyle} />,
        },
        {
          name: "schedule",
          link: "/user/schedule",
          icon: <Calendar className={iconStyle} />,
        },
        {
          name: "team",
          link: "/user/team",
          icon: <Users className={iconStyle} />,
        },
        {
          name: "find a team",
          link: "/user/find",
          icon: <Search className={iconStyle} />,
        },
      ],
    },
  },
};
