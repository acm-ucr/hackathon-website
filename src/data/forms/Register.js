import { AGES, DIETS, MAJORS } from "./Information";
import { GRADES } from "./Information";
import { GENDERS } from "./Information";
import { SHIRTS } from "./Information";
import { SCHOOLS } from "./Schools";

export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      "Hello! Rose Hack is coming January 14-15, 2023. Thank you for your  interest in Rose Hack, UC Riverside's women-centric hackathon founded by the female leaders of SWE and WINC! Mentors are essential to our hackathon in helping guide our hackers with their projects. Your experience and knowledge is valuable to those who need assistance during the event. You are welcome to join remotely and mentor over Discord/Zoom if that is convenient, but our event is purely in-person in terms of hacking. Meals are also provided during breakfast, lunch, and dinner times in person. If you are interested in joining the Rose Hack Team as a mentor, please fill out this quick interest form below!",
      "We also want to note that if you are mentoring at Rose Hack, you are unable to participate as a hacker as well. If you have any other questions please feel free to contact us on our socials or email us at rosehackucr@gmail.com! :)",
    ],
  },
  name: {
    input: "input",
    name: "name",
    type: "text",
    title: "Name",
    maxLength: 50,
    width: 6,
    editable: false,
    required: true,
  },
  email: {
    input: "input",
    name: "email",
    type: "email",
    title: "Email Address",
    maxLength: 50,
    width: 6,
    editable: false,
    required: true,
  },
  phone: {
    input: "input",
    name: "phone",
    type: "phone",
    title: "Phone Number",
    placeholder: "123 456 7890",
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
  },
  age: {
    input: "select",
    title: "Age",
    options: AGES,
    field: "age",
    placeholder: "Age",
    width: 12,
    required: true,
  },
  school: {
    input: "select",
    title: "School",
    options: SCHOOLS,
    field: "school",
    placeholder: "School",
    width: 12,
    required: true,
  },
  grade: {
    input: "select",
    title: "Grade",
    options: GRADES,
    field: "grade",
    placeholder: "ie. Undergraduate",
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
  diet: {
    input: "checkboxes",
    width: 12,
    field: "diet",
    options: DIETS,
  },

  resume: {
    input: "upload",
    field: "resume",
    text: "Upload  Resume",
    width: 12,
    types: ["pdf"],
    maxSize: [150, "KB"],
    required: true,
  },
  requirements: {
    input: "checkboxes",
    width: 12,
    field: "requirements",
    required: true,
    options: [
      "I agree to photograph.",
      "I understand that I will attend the event in person.",
    ],
  },
};
