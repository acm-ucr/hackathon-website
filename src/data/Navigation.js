import {
  BsFillPersonFill,
  BsPeopleFill,
  BsBarChartFill,
  BsGlobe2,
  BsBoxArrowInRight,
} from "react-icons/bs";
import { MdVolunteerActivism } from "react-icons/md";
import { BiSolidHelpCircle } from "react-icons/bi";
import { FaGavel, FaEnvelope, FaLock, FaCalendarDay } from "react-icons/fa";
import { AiOutlineQrcode } from "react-icons/ai";

const iconStyle = "mr-2";

export const AdminTabs = {
  Dashboards: {
    mt: "mt-3",
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
        link: "/admin/admin",
        icon: <FaLock className={iconStyle} />,
      },
    ],
  },
  Services: {
    mt: "mt-5",
    tabs: [
      {
        name: "calendar",
        link: "/admin/calendar",
        icon: <FaCalendarDay className={iconStyle} />,
      },
      {
        name: "messenger",
        link: "/admin/messenger",
        icon: <FaEnvelope className={iconStyle} />,
      },
      {
        name: "check in",
        link: "/admin/checkin",
        icon: <AiOutlineQrcode className={iconStyle} />,
      },
      {
        name: "statistics",
        link: "/admin/statistics",
        icon: <BsBarChartFill className={iconStyle} />,
      },
    ],
  },
  " ": [
    {
      name: "website",
      link: "/",
      icon: <BsGlobe2 className={iconStyle} />,
    },
    {
      name: "sign out",
      link: "sign out",
      icon: <BsBoxArrowInRight className={iconStyle} />,
    },
  ],
};

export const UserTabs = {
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
        icon: <BsPeopleFill className={iconStyle} />,
      },
    ],
  },
  " ": [
    {
      name: "website",
      link: "/",
      icon: <BsGlobe2 className={iconStyle} />,
    },
    {
      name: "sign out",
      link: "sign out",
      icon: <BsBoxArrowInRight className={iconStyle} />,
    },
  ],
};
