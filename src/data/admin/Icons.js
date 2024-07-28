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
  winner: <FaCrown className="ml-1 text-lg text-hackathon-yellow-100" />,
  phone: <FaPhoneAlt className="mr-2 text-hackathon-blue-200" />,
  email: <IoIosMail className="mr-2 text-lg text-hackathon-blue-200" />,
  shirt: <IoIosShirt className="mr-2 text-lg text-hackathon-blue-200" />,
  diet: <FaAppleAlt className="mr-2 text-hackathon-blue-200" />,
  age: <FaBirthdayCake className="mr-2 text-lg text-hackathon-blue-200" />,
  gender: <FaVenusMars className="mr-2 text-lg text-hackathon-blue-200" />,
  grade: <IoIosSchool className="mr-2 text-lg text-hackathon-blue-200" />,
  major: <FaBook className="mr-2 text-lg text-hackathon-blue-200" />,
  school: <FaSchool className="mr-2 text-lg text-hackathon-blue-200" />,
  eventSource: (
    <MdContactPage className="mr-2 text-lg text-hackathon-blue-200" />
  ),
  priorHackathons: <FaClock className="mr-2 text-lg text-hackathon-blue-200" />,
};