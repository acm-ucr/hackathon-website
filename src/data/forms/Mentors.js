import { MAJORS } from "./Information";
import { GRADES } from "./Information";
import { GENDERS } from "./Information";
import { SHIRTS } from "./Information";

export const HELPER = {
  phone: "",
  major: "",
  grade: "",
  gender: "",
  shirt: "",
  requirements: {
    "I agree to photograph. Thank you": false,
    "I understand that I will attend the event in person.": false,
  },
  availability: {
    "Friday Morning": false,
    "Saturday Morning": false,
    "Sunday Morning": false,
    "Friday Afternoon": false,
    "Saturday Afternoon": false,
    "Sunday Afternoon": false,
    "Friday Evening": false,
    "Saturday Evening": false,
    "Sunday Evening": false,
    "Friday Night": false,
    "Saturday Night": false,
    "Sunday Night": false,
  },
};
export const FIELDS = [
  {
    input: "description",
    width: 12,
    texts: [
      "Hello! Rose Hack is coming January 14-15, 2023. Thank you for your  interest in Rose Hack, UC Riverside's women-centric hackathon founded by the female leaders of SWE and WINC! Mentors are essential to our hackathon in helping guide our hackers with their projects. Your experience and knowledge is valuable to those who need assistance during the event. You are welcome to join remotely and mentor over Discord/Zoom if that is convenient, but our event is purely in-person in terms of hacking. Meals are also provided during breakfast, lunch, and dinner times in person. If you are interested in joining the Rose Hack Team as a mentor, please fill out this quick interest form below!",
      "We also want to note that if you are mentoring at Rose Hack, you are unable to participate as a hacker as well. If you have any other questions please feel free to contact us on our socials or email us at rosehackucr@gmail.com! :)",
    ],
  },
  {
    input: "input",
    name: "name",
    type: "text",
    title: "Name",
    maxLength: 50,
    width: 6,
    editable: false,
  },
  {
    input: "input",
    name: "email",
    type: "email",
    title: "Email Address",
    maxLength: 50,
    width: 6,
    editable: false,
  },
  {
    input: "input",
    name: "phone",
    type: "phone",
    title: "Phone Number",
    placeholder: "123 456 7890",
    maxLength: 50,
    width: 12,
  },
  {
    input: "select",
    title: "Major",
    options: MAJORS,
    field: "major",
    placeholder: "Computer Science",
    width: 12,
  },
  {
    input: "select",
    title: "Grade",
    options: GRADES,
    field: "grade",
    placeholder: "Undergraduate",
    width: 12,
  },
  {
    input: "checkboxes",
    width: 12,
    field: "availability",
    text: "Availability",
  },
  {
    input: "radio",
    text: "Gender",
    options: GENDERS,
    field: "gender",
    width: 12,
  },
  {
    input: "radio",
    text: "Shirt Size",
    options: SHIRTS,
    field: "shirt",
    width: 12,
  },
  {
    input: "textarea",
    name: "response",
    rows: 4,
    title: "What skills and experience can you bring as a mentor?",
    placeholder: "I can bring...",
    width: 12,
  },
  {
    input: "checkboxes",
    width: 12,
    field: "requirements",
  },
];
