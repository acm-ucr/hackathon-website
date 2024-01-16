import { GENDERS } from "./Information";
import { SHIRTS } from "./Information";

export const PANELISTS = {
  professor: "Professor",
  intern: "Intern",
  researcher: "Researcher",
};

export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      "Welcome to HACKATHON_NAME. Thank you for considering participating in our panel! We appreciate your efforts to help support HACKATHON_NAME. HACKATHON_NAME is a DESCRIPTION hackathon spanning HACKATHON_LENGTH on HACKATHON_DATE.",
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
  panelist: {
    input: "radio",
    text: "Panelist Role",
    options: PANELISTS,
    field: "panelist",
    width: 12,
    required: true,
  },
  company: {
    input: "input",
    name: "company",
    type: "text",
    title: "Company",
    placeholder: "ie. UBER",
    maxLength: 50,
    width: 12,
    required: true,
  },

  title: {
    input: "input",
    name: "title",
    type: "text",
    title: "Title",
    placeholder: "ie. SWE",
    maxLength: 50,
    width: 12,
    required: true,
  },
  gender: {
    input: "radio",
    text: "Gender",
    options: GENDERS,
    field: "gender",
    width: 12,
    required: true,
  },
  shirt: {
    input: "radio",
    text: "Shirt Size",
    options: SHIRTS,
    field: "shirt",
    width: 12,
    required: true,
  },

  photo: {
    input: "upload",
    field: "photo",
    text: "Upload Photo",
    width: 12,
    types: ["png", "jpg", "jpeg"],
    maxSize: [1, "MB"],
    required: true,
  },
  requirements: {
    text: "Terms and Conditions",
    input: "checkboxes",
    width: 12,
    field: "requirements",
    required: true,
    options: [
      "I have read the MLH code of conduct and agree to the terms and conditions listed",
      "I consent to photographs being taken and being used for future marketing purposes",
      "I consent to providing a safe space for hackers to learn and grow their interests in computing",
      "I consent to following the provided guidelines and rules instructed by the organizing team",
      "I understand that failure to comply with guidelines or creating an unsafe space will result in my removal from the event",
      "I understand this is an in person event taking place in UCR and I must attend the panel in person.",
    ],
  },
};

export const ATTRIBUTES = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  shirt: "",
  affiliation: "",
  title: "",
  photo: "",
  requirements: [],
};
