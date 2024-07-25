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
  GenderMale,
  BirthdayCake,
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
  winner: <Crown className="ml-1 text-hackathon-yellow-100 text-lg" />,
  phone: <Phone className="text-hackathon-blue-200 mr-2" />,
  email: <Mail className="text-hackathon-blue-200 mr-2 text-lg" />,
  shirt: <Shirt className="text-hackathon-blue-200 mr-2 text-lg" />,
  diet: <Apple className="text-hackathon-blue-200 mr-2" />,
  age: <BirthdayCake className="text-hackathon-blue-200 mr-2 text-lg" />,
  gender: <GenderMale className="text-hackathon-blue-200 mr-2 text-lg" />,
  grade: <School className="text-hackathon-blue-200 mr-2 text-lg" />,
  major: <BookOpen className="text-hackathon-blue-200 mr-2 text-lg" />,
  school: <GraduationCap className="text-hackathon-blue-200 mr-2 text-lg" />,
  eventSource: <Contact className="text-hackathon-blue-200 mr-2 text-lg" />,
  priorHackathons: <Clock className="text-hackathon-blue-200 mr-2 text-lg" />,
};
