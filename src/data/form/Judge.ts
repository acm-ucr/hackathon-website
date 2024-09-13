import {
  Description,
  RadioInput,
  TermsAndConditions,
  TextInput,
  UploadInput,
} from "@/types/forms";
import { GENDERS } from "./Information";
import { SHIRTS } from "./Information";
import data from "@/data/Config";

interface Attributes {
  name: string;
  email: string;
  phone: string;
  gender: string;
  shirt: string;
  affiliation: string;
  title: string;
  photo: string;
  requirements: string[];
}

interface Affiliations {
  professor: string;
  student: string;
  industry: string;
}

interface Fields {
  description: Description;
  name: TextInput;
  email: TextInput;
  phone: TextInput;
  gender: RadioInput;
  shirt: RadioInput;
  affiliation: RadioInput;
  title: TextInput;
  photo: UploadInput;
  requirements: TermsAndConditions;
}

export const AFFILIATIONS: Affiliations = {
  professor: "Professor",
  student: "Student",
  industry: "Industry",
};

export const FIELDS: Fields = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `Welcome to ${
        data.name
      }. Thank you for considering to become a judge, we appreciate your efforts to help support ${
        data.name
      }. ${data.name} is a ${data.description} hackathon spanning ${
        data.length
      } hours on ${data.date.toLocaleString("default", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}.`,
      "Judges are not required to stay the full duration of the event, but are encouraged to checkout the various events, workshops, and opportunities that are available.",
      "Judge duties include but are not limited to visiting various teams to assess teams on their idea, technical complexities, and overall presentation after which they will decide the winners.",
      "Note: Judges are not permitted to become participants for the hackathon.",
    ],
  },
  name: {
    input: "input",
    name: "name",
    placeholder: "John Doe",
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
    placeholder: "John Doe",
    type: "email",
    title: "Email Address",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
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

  affiliation: {
    input: "radio",
    text: "Affiliation",
    options: Object.values(AFFILIATIONS),
    field: "affiliation",
    width: 12,
    required: true,
    editable: true,
  },

  title: {
    input: "input",
    name: "title",
    type: "text",
    title: "Title",
    placeholder: "ie. Hackathon Director",
    maxLength: 50,
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
    required: true,
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
  },
};

export const ATTRIBUTES: Attributes = {
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
