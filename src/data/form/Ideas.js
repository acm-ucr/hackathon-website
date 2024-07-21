export const LANGUAGES = ["Arduino", "Next.js", "PyTorch", "Unity"];

export const FIELDS = {
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
  description: {
    input: "textarea",
    name: "description",
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
