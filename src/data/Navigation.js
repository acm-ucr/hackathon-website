import {
  BsFillPersonFill,
  BsPeopleFill,
  BsBarChartFill,
  BsPersonRaisedHand,
} from "react-icons/bs";
import {
  MdVolunteerActivism,
  MdFeedback,
  MdLibraryBooks,
} from "react-icons/md";
import { BiSolidHelpCircle } from "react-icons/bi";
import { GoSponsorTiers } from "react-icons/go";
import {
  FaGavel,
  FaEnvelope,
  FaLock,
  FaCalendarDay,
  FaExclamation,
  FaSearch,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { AiOutlineQrcode } from "react-icons/ai";
import { SiHandshake } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";

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
          icon: <BsFillPersonFill className={iconStyle} />,
        },
        {
          name: "teams",
          link: "/admin/teams",
          icon: <BsPeopleFill className={iconStyle} />,
        },
        {
          name: "judges",
          link: "/admin/judges",
          icon: <FaGavel className={iconStyle} />,
        },
        {
          name: "volunteers",
          link: "/admin/volunteers",
          icon: <MdVolunteerActivism className={iconStyle} />,
        },
        {
          name: "mentors",
          link: "/admin/mentors",
          icon: <BiSolidHelpCircle className={iconStyle} />,
        },
        {
          name: "admin",
          link: "/admin/admins",
          icon: <FaLock className={iconStyle} />,
        },
        {
          name: "committees",
          link: "/admin/committees",
          icon: <SiHandshake className={iconStyle} />,
        },
        {
          name: "sponsors",
          link: "/admin/sponsors",
          icon: <GoSponsorTiers className={iconStyle} />,
        },
        {
          name: "panelists",
          link: "/admin/panelists",
          icon: <IoIosPeople className={iconStyle} />,
        },
        {
          name: "interests",
          link: "/admin/interests",
          icon: <FaExclamation className={iconStyle} />,
        },
        {
          name: "feedback",
          link: "/admin/feedback",
          icon: <MdFeedback className={iconStyle} />,
        },
        {
          name: "leads",
          link: "/admin/leads",
          icon: <BsPersonRaisedHand className={iconStyle} />,
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
          icon: <FaCalendarDay className={iconStyle} />,
        },
        {
          name: "contacts",
          link: "/admin/contacts",
          icon: <FaEnvelope className={iconStyle} />,
        },
        {
          name: "check in",
          link: "/admin/checkin",
          icon: <AiOutlineQrcode className={iconStyle} />,
        },
        {
          name: "judging",
          link: "/admin/judging",
          icon: <FaGavel className={iconStyle} />,
        },
        {
          name: "statistics",
          link: "/admin/statistics",
          icon: <BsBarChartFill className={iconStyle} />,
        },
        {
          name: "settings",
          link: "/admin/settings",
          icon: <FaGear className={iconStyle} />,
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
          icon: <BsFillPersonFill className={iconStyle} />,
        },
        {
          name: "checkin",
          link: "/user/checkin",
          icon: <AiOutlineQrcode className={iconStyle} />,
        },
        {
          name: "schedule",
          link: "/user/schedule",
          icon: <FaCalendarDay className={iconStyle} />,
        },
        {
          name: "team",
          link: "/user/team",
          icon: <RiTeamFill className={iconStyle} />,
        },
        {
          name: "resources",
          link: "/user/resources",
          icon: <MdLibraryBooks className={iconStyle} />,
        },
        {
          name: "find a team",
          link: "/user/find",
          icon: <FaSearch className={iconStyle} />,
        },
      ],
    },
  },
};
