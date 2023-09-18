export const AFFILIATIONS = [
  "director",
  "marketing",
  "sponsorship",
  "recruitment",
  "software",
  "UIUX",
];

export const POSITIONS = ["lead", "committee"];

export const HELPER = {
  discord: "",
  affiliations: "",
  position: "",
  requirements: {
    "You will be given access to private data that cannot be shared anywhere. If you violate this, you will be reported.": false,
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
      "If you would like access to Rosehack&apos;s Admin Portal, please submit the request form below!",
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
    name: "discord",
    type: "text",
    title: "Discord Username",
    placeholder: "john_doe#1234",
    maxLength: 50,
    width: 12,
  },
  {
    input: "radio",
    text: "Affiliations",
    options: AFFILIATIONS,
    field: "affiliations",
    width: 12,
  },
  {
    input: "radio",
    text: "Position",
    options: POSITIONS,
    field: "position",
    width: 12,
  },
  {
    input: "checkboxes",
    width: 12,
    field: "requirements",
  },
];
