export const AFFILIATIONS = [
  "director",
  "marketing",
  "sponsorship",
  "recruitment",
  "software",
  "uiux",
  "operations",
];

export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      "Welcome to HACKATHON_NAME. Thank you for being on the organizing team, we appreciate your efforts to help support HACKATHON_NAME. HACKATHON_NAME is a DESCRIPTION hackathon spanning HACKATHON_LENGTH on HACKATHON_DATE.",
      "Committee members are not required to stay the full duration of the event, but are encouraged to checkout the various events, workshops, and opportunities that are available.",
      "Note: Committee members are allowed to become participants for the hackathon.",
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
  discord: {
    input: "input",
    name: "discord",
    type: "text",
    title: "Discord Username",
    placeholder: "john_doe#1234",
    maxLength: 50,
    width: 12,
    required: true,
  },
  affiliation: {
    input: "radio",
    text: "Affiliation",
    options: AFFILIATIONS,
    field: "affiliation",
    width: 12,
    required: true,
  },
  requirements: {
    text: "Terms and Conditions",
    input: "checkboxes",
    width: 12,
    field: "requirements",
    options: [
      "I have read the MLH code of conduct and agree to the terms and conditions listed",
      "I consent to photographs being taken and being used for future marketing purposes",
      "I consent to providing a safe space for hackers to learn and grow their interests in computing",
      "I consent to following the provided guidelines and rules instructed by the organizing team",
      "I understand that failure to comply with guidelines or creating an unsafe space will result in my removal from the event",
      "I understand this is an in person event taking place in UCR and I must attend in person in order to participate",
      "I understand that I will be given access to private data and malicious intents and actions will be reported immediately.",
    ],
    required: true,
  },
};

export const ATTRIBUTES = {
  name: "",
  email: "",
  discord: "",
  affiliation: "",
  requirements: [],
};
