export const ATTRIBUTES = {
  admins: ["name", "email", "affiliation", "discord"],
  committees: ["name", "email", "affiliation", "discord"],
  judges: [
    "name",
    "email",
    "phone",
    "gender",
    "title",
    "affiliation",
    "shirt",
    "photo",
  ],
  mentors: ["name", "email", "discord", "availability", "response"],
  volunteers: ["name", "email", "discord", "availability", "response"],
  interests: ["name", "email"],
  participants: [
    "phone",
    "major",
    "age",
    "school",
    "grade",
    "gender",
    "shirt",
    "diet",
    "resume",
    "name",
    "email",
    "roles",
    "discord",
  ],
  sponsors: [
    "name",
    "email",
    "phone",
    "company",
    "position",
    "tier",
    "response",
  ],
  feedback: [
    "rating",
    "additionalComments",
    "eventSource",
    "improvements",
    "notBeneficial",
    "helpful",
    "status",
  ],
};

export const AUTH = {
  POST: {},
  GET: {
    admins: [1],
  },
  PUT: {
    admins: [1],
  },
  DELETE: {
    admins: [1],
  },
};
