import {
  CheckboxInput,
  Description,
  RadioInput,
  SelectInput,
  TermsAndConditions,
  TextareaInput,
  TextInput,
  UploadInput,
} from "@/types/forms";
import { AGES, MAJORS } from "./Information";
import { GRADES, GENDERS, SOURCES } from "./Information";
import { SCHOOLS } from "./Schools";
import data from "@/data/Config";

interface Attributes {
  name: string;
  email: string;
  phone: string;
  major: string;
  age: string;
  school: string;
  grade: string;
  gender: string;
  resume: string;
  requirements: string[];
  priorHackathons: string[];
}

export const ATTRIBUTES: Attributes = {
  name: "",
  email: "",
  phone: "",
  major: "",
  age: "",
  school: "",
  grade: "",
  gender: "",
  resume: "",
  requirements: [],
  priorHackathons: [],
};

interface Fields {
  description: Description;
  name: TextInput;
  email: TextInput;
  phone: TextInput;
  discord: TextInput;
  major: SelectInput;
  age: SelectInput;
  school: SelectInput;
  grade: SelectInput;
  gender: RadioInput;
  eventSource: SelectInput;
  priorHackathons: CheckboxInput;
  priorExperience: TextareaInput;
  response: TextareaInput;
  resume: UploadInput;
  requirements: TermsAndConditions;
}

export const FIELDS: Fields = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `Welcome to ${data.name} ${
        data.date.getFullYear() + 1
      }. Thank you for considering to become a lead, we appreciate your enthusiasm to join ${
        data.name
      }, a ${data.description} hackathon.`,
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
    placeholder: "john.doe@gmail.com",
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
    editable: true,
    required: true,
  },
  discord: {
    input: "input",
    name: "discord",
    type: "text",
    title: "Discord Username",
    placeholder: "ie. john_doe#1234",
    maxLength: 50,
    width: 12,
    editable: true,
    required: true,
  },
  major: {
    input: "select",
    title: "Major",
    options: MAJORS,
    field: "major",
    placeholder: "ie. Computer Science",
    width: 12,
    required: true,
    editable: true,
    searchable: true,
  },
  age: {
    input: "select",
    title: "Age",
    options: AGES,
    field: "age",
    placeholder: "ie. 18",
    width: 12,
    required: true,
    editable: true,
    searchable: true,
  },
  school: {
    input: "select",
    title: "School",
    options: SCHOOLS,
    field: "school",
    placeholder: "ie. University of California, Riverside",
    width: 12,
    required: true,
    editable: true,
    searchable: true,
  },
  grade: {
    input: "select",
    title: "Grade",
    options: GRADES,
    field: "grade",
    placeholder: "ie. Undergraduate",
    width: 12,
    required: true,
    editable: true,
    searchable: true,
  },
  gender: {
    input: "radio",
    text: "Gender",
    options: GENDERS,
    field: "gender",
    width: 12,
    editable: true,
    required: true,
  },
  eventSource: {
    input: "select",
    title: "How did you find the event?",
    options: SOURCES,
    field: "eventSource",
    placeholder: "ie. Social Media",
    width: 12,
    editable: true,
    searchable: true,
    required: true,
  },
  priorHackathons: {
    input: "checkboxes",
    text: "Prior Hackathons",
    field: "priorHackathons",
    width: 12,
    required: true,
    editable: true,
    options: [
      "Cutie Hack",
      "Rose Hack",
      "DesignVerse",
      "Bear Hack",
      "Citrus Hack",
      "MLH",
      "Other",
    ],
  },
  priorExperience: {
    input: "textarea",
    name: "priorExperience",
    rows: 4,
    title: "Please tell us about your prior experience",
    placeholder: "ie. I have prior experience in...",
    width: 12,
    required: true,
    editable: true,
  },
  response: {
    input: "textarea",
    name: "response",
    rows: 4,
    title: `Why do you want to join ${data.name}?`,
    placeholder: "ie. I want to join because...",
    width: 12,
    required: true,
    editable: true,
  },
  resume: {
    input: "upload",
    field: "resume",
    text: "Upload Resume",
    width: 12,
    types: ["pdf"],
    maxSize: [200, "KB"],
    editable: true,
    required: false,
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
      "I consent to photographs being taken and being used for marketing purposes",
      "I consent to providing a safe space for hackers to learn and grow their interests in computing",
      "I consent to following the provided guidelines and rules instructed by the organizing team",
      "I understand that failure to comply with guidelines or creating an unsafe space will result in my removal from the event",
      "I understand this is an in person event taking place in UCR and I must attend in person in order to participate",
      "I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the MLH Privacy Policy",
      "I further agree to the terms of both the MLH Contest Terms and Conditions and the MLH Privacy Policy",
    ],
  },
};
