import { GENDERS } from "./Information";
import { SHIRTS } from "./Information";
import { JUDGE_AFFILIATION } from "./Information";

export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      "Hello! Rose Hack is coming January 14-15, 2023. Thank you for your interest in Rose Hack, UC Riverside’s women-centric hackathon founded by the female leaders of SWE and WINC!Volunteers are essential to our hackathon in helping run the entire event. Responsibilities include helping set up, tech support, clean up, distributing swag, etc. Meals are also provided during breakfast, lunch, and dinner times. If you are interested in joining the Rose Hack Team as a volunteer, please fill out this quick interest form below!",
      "We also want to note that if you are volunteering at Rose Hack, you are unable to participate as a hacker as well. If you have any other questions please feel free to contact us on our socials or email us at rosehackucr@gmail.com!",
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
    placeholder: "123 456 7890",
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

  affiliation: {
    input: "select",
    title: "Affiliation",
    options: JUDGE_AFFILIATION,
    field: "affiliation",
    placeholder: "ie. Student",
    width: 12,
    required: true,
  },

  title: {
    input: "input",
    name: "title",
    type: "text",
    title: "Title",
    placeholder: "ie. Graduate Student",
    maxLength: 50,
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
    input: "checkboxes",
    width: 12,
    field: "requirements",
    required: true,
    options: ["I agree to photograph."],
  },
};
