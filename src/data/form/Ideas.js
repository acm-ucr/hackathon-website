import { LANGUAGES } from "./Information";

export const FIELDS = {
  idea: {
    input: "input",
    name: "idea",
    type: "text",
    title: "Idea",
    placeholder: "ie. Idea 1",
    maxLength: 50,
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
  description: {
    input: "input",
    name: "description",
    type: "text",
    title: "Describe your idea",
    placeholder: "My idea is to...",
    maxLength: 150,
    width: 12,
    required: true,
  },
  contact: {
    input: "input",
    name: "contact",
    type: "text",
    title: "Contact Information",
    placeholder: "ie. Discord: webdiv",
    maxLength: 50,
    width: 12,
    required: true,
  },
};
