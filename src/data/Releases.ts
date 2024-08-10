type live = {
  LIVE: {
    START: Date;
    END: Date;
  };
};

type page = {
  [key: string]: Date;
};

type releases = live | page;

const RELEASES: releases = {
  LIVE: {
    START: new Date("10/01/2023"),
    END: new Date("10/10/2024"),
  },
  "/admin/participants": new Date("10/01/2023"),
  "/admin/teams": new Date("10/01/2023"),
  "/admin/judges": new Date("10/01/2023"),
  "/admin/volunteers": new Date("10/01/2023"),
  "/admin/mentors": new Date("10/01/2023"),
  "/admin/admins": new Date("10/01/2023"),
  "/admin/committees": new Date("10/01/2023"),
  "/admin/sponsors": new Date("10/01/2023"),
  "/admin/panelists": new Date("10/01/2023"),
  "/admin/feedback": new Date("10/01/2023"),
  "/admin/calendar": new Date("10/01/2023"),
  "/admin/statistics": new Date("10/01/2023"),
  "/admin/columns": new Date("10/01/2023"),
  "/admin/dashboard": new Date("10/01/2023"),
  "/admin/icons": new Date("10/01/2023"),
  "/admin/interests": new Date("10/01/2023"),
  "/admin/leads": new Date("10/01/2023"),
  "/admin/messenger": new Date("10/01/2023"),

  "/form/participant": new Date("10/01/2023"),
  "/form/judge": new Date("10/01/2023"),
  "/form/volunteers": new Date("10/01/2023"),
  "/form/mentor": new Date("10/01/2023"),
  "/form/admin": new Date("10/01/2023"),
  "/form/committees": new Date("10/01/2023"),
  "/form/sponsors": new Date("10/01/2023"),
  "/form/panelists": new Date("10/01/2023"),
  "/form/feedback": new Date("10/01/2023"),
  "/form/interest": new Date("10/01/2023"),
  "/form/lead": new Date("10/01/2023"),
  "/form/countries": new Date("10/01/2023"),
  "/form/ideas": new Date("10/01/2023"),
  "/form/information": new Date("10/01/2023"),
  "/form/schools": new Date("10/01/2023"),

  "/user/hackpacks": new Date("10/01/2023"),
  "/user/judging": new Date("10/01/2023"),
  "/user/members": new Date("10/01/2023"),
  "/user/participant": new Date("10/01/2023"),
  "/user/rules": new Date("10/01/2023"),
  "/user/team": new Date("10/01/2023"),

  "/engineering/hackathonsdata": new Date("10/01/2023"),
  "/engineering/navigation": new Date("10/01/2023"),
};

export default RELEASES;
