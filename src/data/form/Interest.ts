import {
  Description,
  TextInput,
  SelectInput,
  TermsAndConditions,
} from "@/types/forms";
import data from "@/data/Config";
import { SOURCES } from "./Information";

interface Attributes {
  name: string;
  email: string;
  eventSource: string;
  requirements: string[];
}

export const ATTRIBUTES: Attributes = {
  name: "",
  email: "",
  eventSource: "",
  requirements: [],
};

interface Fields {
  description: Description;
  name: TextInput;
  email: TextInput;
  eventSource: SelectInput;
  requirements: TermsAndConditions;
}

export const FIELDS: Fields = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `Welcome to ${data.name}. Thank you for taking interest in ${
        data.name
      }, we appreciate your efforts to help support ${data.name}. ${
        data.name
      } is a ${data.description} hackathon spanning ${
        data.length
      } hours on ${data.date.toLocaleString("default", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}.`,
      "This is simply an interest form, once applications are released, you will be notified immediately and will be required to register again. We hope to see you there!",
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
  eventSource: {
    input: "select",
    title: `How did you find ${data.name}?`,
    options: SOURCES,
    field: "eventSource",
    placeholder: "ie. Social Media",
    width: 12,
    required: true,
    editable: false,
    searchable: true,
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
      "I understand this is an in person event taking place in UCR and I must attend in person in order to participate",
    ],
  },
};
