import data from "../Config";

export const LANGUAGES = ["Arduino", "Next.js", "PyTorch", "Unity"];

export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `Welcome to ${
        data.name
      }. Thank you for being on the organizing team, we appreciate your efforts to help support ${
        data.name
      }. ${data.name} is a ${data.description} hackathon spanning ${
        data.length
      } on ${data.date.toLocaleString("default", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}.`,
      "Admins are not required to stay the full duration of the event, but are encouraged to checkout the various events, workshops, and opportunities that are available.",
      "Note: Admins are not permitted to become participants for the hackathon.",
    ],
  },
  idea: {
    input: "textarea",
    name: "idea",
    rows: 4,
    title: "Title of Idea",
    placeholder: "ie. Idea 1",
    width: 12,
    required: true,
  },
  languages: {
    input: "checkboxes",
    width: 12,
    field: "languages",
    text: "Languages",
    required: true,
    options: LANGUAGES,
  },
  details: {
    input: "textarea",
    name: "details",
    title: "Describe your idea",
    placeholder: "My idea is to...",
    rows: 4,
    width: 12,
    required: true,
  },
  contact: {
    input: "textarea",
    name: "contact",
    rows: 4,
    title: "Contact Information",
    placeholder: "ie. Discord: webdiv",
    width: 12,
    required: true,
  },
};

export const ATTRIBUTES = {
  idea: "",
  languages: [],
  description: "",
  contact: "",
};
