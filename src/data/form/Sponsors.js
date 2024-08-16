import data from "@/data/Config";

export const TIERS = {
  tier1: "Bronze",
  tier2: "Silver",
  tier3: "Gold",
  tier4: "Tier4",
  tier5: "Tier5",
  other: "Other",
};

export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `Welcome to ${
        data.name
      }. Thank you for being on the Sponsorship team, we appreciate your efforts to help support ${
        data.name
      }. ${data.name} is a ${data.description} hackathon spanning ${
        data.length
      } on ${data.date.toLocaleString("default", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}.`,
      `By sponsoring ${data.name}, you help advocate for SPONSOR_REASONS.`,
      "Sponsorship members are not required to stay the full duration of the event, but are encouraged to checkout the various events, workshops, and opportunities that are available.",
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
  company: {
    input: "input",
    name: "company",
    type: "text",
    title: "Company Name",
    placeholder: "ie. Major League Hacking",
    maxLength: 50,
    width: 12,
    required: true,
  },
  position: {
    input: "input",
    name: "position",
    type: "text",
    title: "Position",
    placeholder: "ie. Head of Growth",
    maxLength: 50,
    width: 12,
    required: true,
  },
  tier: {
    input: "radio",
    text: "Sponsorship Tier (check sponsorship packet)",
    options: TIERS,
    field: "tier",
    width: 12,
    required: true,
  },
  comments: {
    input: "textarea",
    name: "comments",
    rows: 4,
    title: "Additional Comments/Questions",
    placeholder: "ie. How can my organization assist your hackathon?",
    width: 12,
    required: true,
  },
  requirements: {
    text: "Terms and Conditions",
    input: "terms",
    width: 12,
    field: "requirements",
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

export const ATTRIBUTES = {
  name: "",
  email: "",
  phone: "",
  company: "",
  position: "",
  tier: "",
  requirements: [],
};
