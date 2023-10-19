import { CONFIG } from "../../Config";

export const AFFILIATIONS = [
  "director",
  "marketing",
  "sponsorship",
  "recruitment",
  "software",
  "UIUX",
  "operations",
];

export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `If you would like access to ${CONFIG.name} Admin Portal, please submit the request form below!`,
    ],
  },
  name: {
    input: "input",
    name: "name",
    type: "text",
    title: "Name",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
  },
  email: {
    input: "input",
    name: "email",
    type: "email",
    title: "Email Address",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
  },
  discord: {
    input: "input",
    name: "discord",
    type: "text",
    title: "Discord Username",
    placeholder: "john_doe#1234",
    maxLength: 50,
    width: 12,
    required: true,
  },
  affiliation: {
    input: "radio",
    text: "Affiliation",
    options: AFFILIATIONS,
    field: "affiliation",
    width: 12,
    required: true,
  },
  requirements: {
    text: "Terms and Conditions",
    input: "checkboxes",
    width: 12,
    field: "requirements",
    options: [
      "You will be given access to private data that cannot be shared anywhere. If you violate this, you will be reported.",
    ],
    required: true,
  },
};

export const ATTRIBUTES = {
  name: "",
  email: "",
  discord: "",
  affiliation: "",
  requirements: [],
};
