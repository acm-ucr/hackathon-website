import { GENDERS } from "./Information";
import { SHIRTS } from "./Information";
import data from "@/data/Config";
import {
  Description,
  RadioInput,
  TermsAndConditions,
  TextInput,
  UploadInput,
} from "@/types/forms";

interface Attributes {
  name: string;
  email: string;
  phone: string;
  company: string;
  gender: string;
  shirt: string;
  panel: string;
  title: string;
  photo: string;
  requirements: string[];
}

interface Panelists {
  professor: string;
  intern: string;
  researcher: string;
}

export const PANELISTS: Panelists = {
  professor: "Professor",
  intern: "Intern",
  researcher: "Researcher",
};

interface Fields {
  description: Description;
  name: TextInput;
  email: TextInput;
  phone: TextInput;
  panel: RadioInput;
  company: TextInput;
  title: TextInput;
  gender: RadioInput;
  shirt: RadioInput;
  photo: UploadInput;
  requirements: TermsAndConditions;
}

export const FIELDS: Fields = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `Welcome to ${
        data.name
      }. Thank you for considering to become a panelist. We appreciate your efforts to help support ${
        data.name
      }. ${data.name} is a ${data.description} hackathon spanning ${
        data.length
      } hours on ${data.date.toLocaleString("default", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}.`,
      "Panelists are not required to stay the full duration of the event, but are encouraged to checkout the various events, workshops, and opportunities that are available.",
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
    placeholder: "John Doe ",
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
    placeholder: "john.doe@gmail.com",
  },
  phone: {
    input: "input",
    name: "phone",
    type: "phone",
    title: "Phone Number",
    placeholder: "ie. 123 456 7890",
    maxLength: 50,
    width: 12,
    required: true,
    editable: true,
  },
  panel: {
    input: "radio",
    text: "Panelist Role",
    options: Object.values(PANELISTS),
    field: "panelist",
    width: 12,
    required: true,
    editable: true,
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
    editable: true,
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
    editable: true,
  },
  gender: {
    input: "radio",
    text: "Gender",
    options: GENDERS,
    field: "gender",
    width: 12,
    required: true,
    editable: true,
  },
  shirt: {
    input: "radio",
    text: "Shirt Size",
    options: SHIRTS,
    field: "shirt",
    width: 12,
    required: true,
    editable: true,
  },

  photo: {
    input: "upload",
    field: "photo",
    text: "Upload Photo",
    width: 12,
    types: ["png", "jpg", "jpeg"],
    maxSize: [1, "MB"],
    required: true,
    editable: true,
  },
  requirements: {
    text: "Terms and Conditions",
    input: "terms",
    width: 12,
    field: "requirements",
    editable: true,
    options: [
      "I have read the MLH code of conduct and agree to the terms and conditions listed",
      "I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the MLH Privacy Policy",
      "I further agree to the terms of both the MLH Contest Terms and Conditions and the MLH Privacy Policy",
      "I consent to photographs being taken and being used for marketing purposes",
      "I consent to providing a safe space for hackers to learn and grow their interests in computing",
      "I consent to following the provided guidelines and rules instructed by the organizing team",
      "I understand that failure to comply with guidelines or creating an unsafe space will result in my removal from the event",
      "I understand this is an in person event taking place in UCR and I must attend in person in order to judge",
    ],
    required: true,
  },
};

export const ATTRIBUTES: Attributes = {
  name: "",
  email: "",
  phone: "",
  company: "",
  gender: "",
  shirt: "",
  panel: "",
  title: "",
  photo: "",
  requirements: [],
};
