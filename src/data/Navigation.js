import {
  Users,
  User,
  BarChart2,
  NotebookPen,
  HandHeart,
  MessageSquare,
  CircleHelp,
  CircleDollarSign,
  MonitorCog,
  Mail,
  Lock,
  Calendar,
  MessageCircleHeart,
  Search,
  Settings,
  QrCode,
  Handshake,
  Speech,
  Presentation,
} from "lucide-react";

const iconStyle = "mr-2";

export const TABS = {
  admin: {
    Dashboards: {
      expand: true,
      mt: "mt-0",
      tabs: [
        {
          name: "participants",
          link: "/admin/participants",
          icon: <User className={iconStyle} />,
        },
        {
          name: "teams",
          link: "/admin/teams",
          icon: <Users className={iconStyle} />,
        },
        {
          name: "judges",
          link: "/admin/judges",
          icon: <Presentation className={iconStyle} />,
        },
        {
          name: "volunteers",
          link: "/admin/volunteers",
          icon: <HandHeart className={iconStyle} />,
        },
        {
          name: "mentors",
          link: "/admin/mentors",
          icon: <CircleHelp className={iconStyle} />,
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
          icon: <CircleDollarSign className={iconStyle} />,
        },
        {
          name: "panelists",
          link: "/admin/panelists",
          icon: <Speech className={iconStyle} />,
        },
        {
          name: "interests",
          link: "/admin/interests",
          icon: <MessageCircleHeart className={iconStyle} />,
        },
        {
          name: "feedback",
          link: "/admin/feedback",
          icon: <MessageSquare className={iconStyle} />,
        },
        {
          name: "leads",
          link: "/admin/leads",
          icon: <NotebookPen className={iconStyle} />,
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
          icon: <MonitorCog className={iconStyle} />,
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
          icon: <User className={iconStyle} />,
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
