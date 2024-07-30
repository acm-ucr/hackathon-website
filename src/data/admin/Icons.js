import {
  Mail,
  Shirt,
  School,
  Github,
  FileCode,
  Figma,
  Apple,
  Phone,
  Crown,
  GraduationCap,
  UserRound,
  Cake,
  BookOpen,
  Clock,
  Contact,
} from "lucide-react";

export const ICONS = {
  github: (
    <Github className="mr-2 text-lg hover:text-hackathon-green-300 hover:opacity-75" />
  ),
  devpost: (
    <FileCode
      /* No exact match to devpost*/ className="mr-2 text-lg hover:text-hackathon-green-300 hover:opacity-75"
    />
  ),
  figma: (
    <Figma className="mr-2 text-lg hover:text-hackathon-green-300 hover:opacity-75" />
  ),
  winner: <Crown className="ml-1 text-lg text-hackathon-yellow-100" />,
  phone: <Phone className="mr-2 text-hackathon-blue-200" />,
  email: <Mail className="mr-2 text-lg text-hackathon-blue-200" />,
  shirt: <Shirt className="mr-2 text-lg text-hackathon-blue-200" />,
  diet: <Apple className="mr-2 text-hackathon-blue-200" />,
  age: <Cake className="mr-2 text-lg text-hackathon-blue-200" />,
  gender: <UserRound className="mr-2 text-lg text-hackathon-blue-200" />,
  grade: <School className="mr-2 text-lg text-hackathon-blue-200" />,
  major: <BookOpen className="mr-2 text-lg text-hackathon-blue-200" />,
  school: <GraduationCap className="mr-2 text-lg text-hackathon-blue-200" />,
  eventSource: <Contact className="mr-2 text-lg text-hackathon-blue-200" />,
  priorHackathons: <Clock className="mr-2 text-lg text-hackathon-blue-200" />,
};
