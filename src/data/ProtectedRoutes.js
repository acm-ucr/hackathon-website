export const ROUTES = {
  "/": {
    bypass: true,
    title: "Hackathon",
  },
  "/_not-found": {
    bypass: true,
    title: "Hackathon | Not Found",
  },
  "/_error": {
    bypass: true,
    title: "Hackathon | Error",
  },
  "/admin/participants": {
    restrictions: {
      admins: 1,
    },
    title: "Admin | Participants",
  },
  "/admin/feedback": {
    restrictions: {
      admins: 1,
    },
    title: "Admin | Feedback",
  },
  "/admin/teams": {
    restrictions: {
      admins: 1,
    },
    title: "Admin | Teams",
  },
  "/admin/judges": {
    restrictions: {
      admins: 1,
    },
    title: "Admin | Judges",
  },
  "/admin/volunteers": {
    restrictions: {
      admins: 1,
      committees: 1,
      committees: 1,
    },
    title: "Admin | Volunteers",
  },
  "/admin/mentors": {
    restrictions: {
      admins: 1,
      committees: 1,
    },
    title: "Admin | Mentors",
  },
  "/admin/admins": {
    restrictions: {
      admins: 1,
    },
    title: "Admin | Admins",
  },
  "/admin/committees": {
    restrictions: {
      admins: 1,
    },
    title: "Admin | Committees",
  },
  "/admin/participants": {
    restrictions: {
      admins: 1,
    },
    title: "Admin | Participants",
  },
  "/admin/calendar": {
    restrictions: {
      admins: 1,
    },
    title: "Admin | Calendar",
  },
  "/admin/messenger": {
    restrictions: {
      admins: 1,
      committees: 1,
    },
    title: "Admin | Messenger",
  },
  "/admin/checkin": {
    restrictions: {
      admins: 1,
      committees: 1,
    },
    title: "Admin | Checkin",
  },
  "/admin/judging": {
    restrictions: {
      admins: 1,
    },
    title: "Admin | Judging",
  },
  "/admin/prizes": {
    restrictions: {
      admins: 1,
      committees: 1,
    },
    title: "Admin | Prizes",
  },
  "/admin/statistics": {
    restrictions: {
      admins: 1,
      committees: 1,
    },
    title: "Admin | Statistics",
  },
  "/admin/interests": {
    restrictions: {
      admins: 1,
      committees: 1,
    },
    title: "Admin | Interests",
  },

  "/form/admin": {
    restrictions: {
      admins: 1,
    },
    title: "Form | Admin",
  },
  "/form/committee": {
    restrictions: {
      admins: 1,
    },
    title: "Form | Committee",
  },
  "/form/feedback": {
    restrictions: {
      admins: 1,
    },
    title: "Form | Feedback",
  },
  "/form/judge": {
    restrictions: {
      admins: 1,
    },
    title: "Form | Judge",
  },
  "/form/volunteer": {
    restrictions: {
      admins: 1,
    },
    title: "Form | Volunteer",
  },
  "/form/participant": {
    restrictions: {
      admins: 1,
    },
    title: "Form | Participant",
  },
  "/form/mentor": {
    restrictions: {
      admins: 1,
    },
    title: "Form | Mentor",
  },
  "/form/interest": {
    restrictions: {
      admins: 1,
    },
    title: "Form | Interest",
  },

  "/user/dashboard": {
    restrictions: {
      participants: [-1, 0, 1],
    },
    title: "Form | Dashboard",
  },
  "/user/checkin": {
    restrictions: {
      participants: [-1, 0, 1],
    },
    title: "Form | CheckIn",
  },
};
