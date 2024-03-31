import { IoIosMail, IoIosShirt, IoIosSchool } from "react-icons/io";
import { SiGithub, SiDevpost, SiFigma } from "react-icons/si";
import {
  FaAppleAlt,
  FaPhoneAlt,
  FaCrown,
  FaSchool,
  FaVenusMars,
  FaBirthdayCake,
  FaBook,
  FaClock,
} from "react-icons/fa";
import { MdContactPage } from "react-icons/md";

export const ICONS = {
  github: (
    <SiGithub className="mr-2 text-lg hover:text-hackathon-green-300 hover:opacity-75" />
  ),
  devpost: (
    <SiDevpost className="mr-2 text-lg hover:text-hackathon-green-300 hover:opacity-75" />
  ),
  figma: (
    <SiFigma className="mr-2 text-lg hover:text-hackathon-green-300 hover:opacity-75" />
  ),
  winner: <FaCrown className="ml-1 text-hackathon-yellow-100 text-lg" />,
  phone: <FaPhoneAlt className="text-hackathon-blue-200 mr-2" />,
  email: <IoIosMail className="text-hackathon-blue-200 mr-2 text-lg" />,
  shirt: <IoIosShirt className="text-hackathon-blue-200 mr-2 text-lg" />,
  diet: <FaAppleAlt className="text-hackathon-blue-200 mr-2" />,
  age: <FaBirthdayCake className="text-hackathon-blue-200 mr-2 text-lg" />,
  gender: <FaVenusMars className="text-hackathon-blue-200 mr-2 text-lg" />,
  grade: <IoIosSchool className="text-hackathon-blue-200 mr-2 text-lg" />,
  major: <FaBook className="text-hackathon-blue-200 mr-2 text-lg" />,
  school: <FaSchool className="text-hackathon-blue-200 mr-2 text-lg" />,
  eventSource: (
    <MdContactPage className="text-hackathon-blue-200 mr-2 text-lg" />
  ),
  priorHackathons: <FaClock className="text-hackathon-blue-200 mr-2 text-lg" />,
};
