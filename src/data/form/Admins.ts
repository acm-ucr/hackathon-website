import {
  Description,
  RadioInput,
  SelectInput,
  TermsAndConditions,
  TextInput,
} from "@/types/forms";
import { GENDERS, GRADES, SHIRTS, MAJORS } from "./Information";
import data from "@/data/Config";
import { AFFILIATIONS } from "./Information";

interface Attributes {
  name: string;
  email: string;
  discord: string;
  grade: string;
  major: string;
  gender: string;
  shirt: string;
  affiliation: string;
  requirements: string[];
}

interface Fields {
  description: Description;
  name: TextInput;
  email: TextInput;
  discord: TextInput;
  major: SelectInput;
  gender: RadioInput;
  requirements: TermsAndConditions;
  affiliation: RadioInput;
  shirt: RadioInput;
  grade: SelectInput;
}

export const ATTRIBUTES: Attributes = {
  name: "",
  email: "",
  discord: "",
  grade: "",
  major: "",
  gender: "",
  shirt: "",
  affiliation: "",
  requirements: [],
};

export const FIELDS: Fields = {
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
      } hours on ${data.date.toLocaleString("default", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}.`,
      "Admins are not required to stay the full duration of the event, but are encouraged to checkout the various events, workshops, and opportunities that are available.",
      "Note: Admins are not permitted to become participants for the hackathon.",
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
    placeholder: "John Doe",
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
  discord: {
    input: "input",
    editable: true,
    name: "discord",
    type: "text",
    title: "Discord Username",
    placeholder: "ie. john_doe#1234",
    maxLength: 50,
    width: 12,
    required: true,
  },
  major: {
    input: "select",
    title: "Major",
    editable: true,
    options: MAJORS,
    field: "major",
    placeholder: "ie. Computer Science",
    width: 12,
    required: true,
    searchable: true,
  },
  grade: {
    input: "select",
    title: "Grade",
    editable: true,
    options: GRADES,
    field: "grade",
    placeholder: "ie. Undergraduate",
    width: 12,
    required: true,
    searchable: true,
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
      "I understand this is an in person event taking place in UCR and I must attend in person in order to participate",
      "I understand that I will be given access to private data and malicious intents and actions will be reported immediately",
    ],
    required: true,
  },
};
