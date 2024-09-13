import data from "../Config";

export const LANGUAGES = ["Arduino", "Next.js", "PyTorch", "Unity"];

export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `Welcome to ${data.name}. ${data.name} is a ${data.description} hackathon spanning ${
        data.length
      } hours on ${data.date.toLocaleString("default", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}.`,
      "You may submit a project idea to find teammates. These submissions will be public so be mindful of any language and information you share. You can find all submissions on the user portal.",
      "Note: Submissions must comply with the code of conduct, failure to do so may result in removal from the event.",
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
  details: "",
  contact: "",
};
