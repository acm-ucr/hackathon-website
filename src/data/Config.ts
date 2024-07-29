type config = {
  name: string;
  short_name: string;
  email: string;
  description: string;
  length: string;
  date: Date;
  start_url: string;
  year: string;
  end: Date;
  packet: string;
  devpost: string;
  domain: string;
  instagram: string;
  linkedin: string;
  discord: string;
  heart: string;
};

const data: config = {
  name: "HACKATHON",
  short_name: "Hackathon Site",
  email: "contact.acmucr@gmail.com",
  description: "DESCRIPTION",
  length: "HACKATHON_LENGTH",
  date: new Date("2024-04-12T13:20:00"),
  start_url: "/",
  year: "2024",
  end: new Date("2024-04-12T13:20:00"),
  packet: "",
  devpost: "https://devpost.com/",
  domain: "https://www.placeholder.com",
  instagram: "https://www.instagram.com",
  linkedin: "https://www.linkedin.com",
  discord: "https://www.discord.com",
  heart: "🤎",
};

export default data;
