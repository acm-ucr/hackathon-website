import { AGES, DIETS, MAJORS } from "./Information";
import { GRADES } from "./Information";
import { GENDERS } from "./Information";
import { SHIRTS } from "./Information";
import { SCHOOLS } from "./Schools";
import data from "@/data/Config";
import { COUNTRIES } from "./Countries";

export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `Welcome to ${
        data.name
      }. Thank you for considering to become a participant, we appreciate your enthusiasm to join ${
        data.name
      }. ${data.name} is a ${data.description} hackathon spanning ${
        data.length
      } on ${data.date.toLocaleString("default", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}.`,
      "Participants are not required to stay the full duration of the event, but are encouraged to checkout the various events, workshops, and opportunities that are available.",
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
  phone: {
    input: "input",
    name: "phone",
    type: "phone",
    title: "Phone Number",
    placeholder: "ie. 123 456 7890",
    maxLength: 50,
    width: 12,
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
    searchable: true,
  },
  country: {
    input: "select",
    title: "Country",
    options: COUNTRIES,
    field: "country",
    placeholder: "ie. United States of America",
    width: 12,
    required: true,
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
    searchable: true,
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
  diet: {
    input: "checkboxes",
    text: "Dietary Restrictions",
    width: 12,
    field: "diet",
    options: DIETS,
    required: false,
  },

  resume: {
    input: "upload",
    field: "resume",
    text: "Upload  Resume",
    width: 12,
    types: ["pdf"],
    maxSize: [200, "KB"],
    required: false,
  },
  requirements: {
    text: "Terms and Conditions",
    input: "terms",
    width: 12,
    field: "requirements",
    required: true,
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

export const ATTRIBUTES = {
  name: "",
  email: "",
  phone: "",
  major: "",
  age: "",
  country: "",
  school: "",
  grade: "",
  gender: "",
  shirt: "",
  diet: [],
  resume: "",
  requirements: [],
  team: "",
};
