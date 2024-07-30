import {
  Devpost,
  Apple,
  Phone,
  Crown,
  School,
  Venus,
  Cake,
  BookOpen,
  Clock,
  Mail,
  TShirt,
  ContactPage,
} from "lucide-react";

import {
  SiGithub as Github,
  SiFigma as Figma,
} from "@icons-pack/react-simple-icons";

export const ICONS = {
  github: (
    <Github className="mr-2 text-lg hover:text-hackathon-green-300 hover:opacity-75" />
  ),
  devpost: (
    <Devpost className="mr-2 text-lg hover:text-hackathon-green-300 hover:opacity-75" />
  ),
  figma: (
    <Figma className="mr-2 text-lg hover:text-hackathon-green-300 hover:opacity-75" />
  ),
  winner: <Crown className="ml-1 text-lg text-hackathon-yellow-100" />,
  phone: <Phone className="mr-2 text-hackathon-blue-200" />,
  email: <Mail className="mr-2 text-lg text-hackathon-blue-200" />,
  shirt: <TShirt className="mr-2 text-lg text-hackathon-blue-200" />,
  diet: <Apple className="mr-2 text-hackathon-blue-200" />,
  age: <Cake className="mr-2 text-lg text-hackathon-blue-200" />,
  gender: <Venus className="mr-2 text-lg text-hackathon-blue-200" />,
  grade: <School className="mr-2 text-lg text-hackathon-blue-200" />,
  major: <BookOpen className="mr-2 text-lg text-hackathon-blue-200" />,
  school: <School className="mr-2 text-lg text-hackathon-blue-200" />,
  eventSource: <ContactPage className="mr-2 text-lg text-hackathon-blue-200" />,
  priorHackathons: <Clock className="mr-2 text-lg text-hackathon-blue-200" />,
};
