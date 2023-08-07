import {
  BsFillPersonFill,
  BsPeopleFill,
  BsBarChartFill,
  BsGlobe2,
  BsBoxArrowInRight,
} from "react-icons/bs";
import { MdVolunteerActivism } from "react-icons/md";
import { BiSolidHelpCircle } from "react-icons/bi";
import { FaGavel, FaEnvelope } from "react-icons/fa";

const iconStyle = "text-2xl mr-2 mt-2 mb-2";

export const AdminTabs = [
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
    name: "volunteer",
    link: "/admin/volunteer",
    icon: <MdVolunteerActivism className={iconStyle} />,
  },
  {
    name: "mentor",
    link: "/admin/mentor",
    icon: <BiSolidHelpCircle className={iconStyle} />,
  },
  {
    name: "messenger",
    link: "/admin/messenger",
    icon: <FaEnvelope className={iconStyle} />,
  },
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
];

export const UserTabs = [
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
];
