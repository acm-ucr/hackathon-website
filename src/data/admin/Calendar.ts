interface types {
  color: string;
  background: string;
  type: string;
}

export interface label {
  other: types;
  directors: types;
  marketing: types;
  operations: types;
  sponsorship: types;
  recruitment: types;
  software: types;
  uiux: types;
  leads: types;
  workshop: types;
  general: types;
  food: types;
  social: types;
  activities: types;
}

export const LABELS: label = {
  directors: {
    color: "red",
    background: "!bg-hackathon-tags-red-text",
    type: "leads",
  },
  marketing: {
    color: "yellow",
    background: "!bg-hackathon-tags-yellow-text",
    type: "leads",
  },
  operations: {
    color: "green",
    background: "!bg-hackathon-tags-green-text",
    type: "leads",
  },
  sponsorship: {
    color: "purple",
    background: "!bg-hackathon-tags-purple-text",
    type: "leads",
  },
  recruitment: {
    color: "teal",
    background: "!bg-hackathon-tags-teal-text",
    type: "leads",
  },
  software: {
    color: "teal",
    background: "!bg-hackathon-tags-teal-text",
    type: "leads",
  },
  uiux: {
    color: "lightgreen",
    background: "!bg-hackathon-tags-lightgreen-text",
    type: "leads",
  },
  leads: {
    color: "red",
    background: "!bg-hackathon-tags-red-text",
    type: "leads",
  },
  other: {
    color: "gray",
    background: "!bg-hackathon-tags-gray-text",
    type: "leads",
  },
  workshop: {
    color: "grayblue",
    background: "!bg-hackathon-tags-grayblue-text",
    type: "hackathon",
  },
  general: {
    color: "pink",
    background: "!bg-hackathon-tags-pink-text",
    type: "hackathon",
  },
  food: {
    color: "yellow",
    background: "!bg-hackathon-tags-yellow-text",
    type: "hackathon",
  },
  social: {
    color: "red",
    background: "!bg-hackathon-tags-red-text",
    type: "hackathon",
  },
  activities: {
    color: "yellow",
    background: "!bg-hackathon-tags-yellow-text",
    type: "hackathon",
  },
};
