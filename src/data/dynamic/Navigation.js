import {
  BsFillPersonFill,
  BsPeopleFill,
  BsBarChartFill,
  BsGlobe2,
  BsBoxArrowInRight,
} from "react-icons/bs";
import { MdVolunteerActivism, MdFeedback } from "react-icons/md";
import { BiSolidHelpCircle } from "react-icons/bi";
import {
  FaGavel,
  FaEnvelope,
  FaLock,
  FaCalendarDay,
  FaMedal,
} from "react-icons/fa";
import { AiOutlineQrcode } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { SiHandshake } from "react-icons/si";

const iconStyle = "mr-2";

export const TABS = {
  admins: {
    Dashboards: {
      expand: true,
      mt: "mt-0",
      tabs: [
        {
          name: "participants",
          link: "/admins/participants",
          icon: <BsFillPersonFill className={iconStyle} />,
        },
        {
          name: "teams",
          link: "/admins/teams",
          icon: <BsPeopleFill className={iconStyle} />,
        },
        {
          name: "judges",
          link: "/admins/judges",
          icon: <FaGavel className={iconStyle} />,
        },
        {
          name: "volunteers",
          link: "/admins/volunteers",
          icon: <MdVolunteerActivism className={iconStyle} />,
        },
        {
          name: "mentors",
          link: "/admins/mentors",
          icon: <BiSolidHelpCircle className={iconStyle} />,
        },
        {
          name: "admins",
          link: "/admins/admins",
          icon: <FaLock className={iconStyle} />,
        },
        {
          name: "committees",
          link: "/admins/committees",
          icon: <SiHandshake className={iconStyle} />,
        },
        {
          name: "feedback",
          link: "/admins/feedback",
          icon: <MdFeedback className={iconStyle} />,
        },
      ],
    },
    Services: {
      expand: true,
      mt: "mt-3",
      tabs: [
        {
          name: "calendar",
          link: "/admins/calendar",
          icon: <FaCalendarDay className={iconStyle} />,
        },
        {
          name: "messenger",
          link: "/admins/messenger",
          icon: <FaEnvelope className={iconStyle} />,
        },
        {
          name: "check in",
          link: "/admins/checkin",
          icon: <AiOutlineQrcode className={iconStyle} />,
        },
        {
          name: "judging",
          link: "/admins/judging",
          icon: <FaGavel className={iconStyle} />,
        },
        {
          name: "prizes",
          link: "/admins/prizes",
          icon: <FaMedal className={iconStyle} />,
        },
        {
          name: "statistics",
          link: "/admins/statistics",
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
        link: "/",
        onClick: () => signOut({ callbackUrl: "/", redirect: true }),
        icon: <BsBoxArrowInRight className={iconStyle} />,
      },
    ],
  },
  users: {
    Portal: {
      mt: "mt-0",
      tabs: [
        {
          name: "dashboard",
          link: "/users/dashboard",
          icon: <BsFillPersonFill className={iconStyle} />,
        },
        {
          name: "checkin",
          link: "/users/checkin",
          icon: <AiOutlineQrcode className={iconStyle} />,
        },
        {
          name: "feedback",
          link: "/forms/feedback",
          icon: <MdFeedback className={iconStyle} />,
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
        link: "/",
        onClick: () => signOut({ callbackUrl: "/", redirect: true }),
        icon: <BsBoxArrowInRight className={iconStyle} />,
      },
    ],
  },
};
