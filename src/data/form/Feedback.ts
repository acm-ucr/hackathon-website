import data from "../Config";
import { SOURCES } from "./Information";
import {
  RadioInput,
  TextareaInput,
  SelectInput,
  Description,
} from "@/src/types/forms";

const RATE = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

type Fields = {
  description: Description;
  eventSource: SelectInput;
  helpful: TextareaInput;
  improvements: TextareaInput;
  notBenficial: TextareaInput;
  rating: RadioInput;
  additionalComments: TextareaInput;
};

type Attributes = {
  helpful: string;
  improvements: string;
  notBeneficial: string;
  rating: string;
  eventSource: string;
  additionalComments: string;
};

export const FIELDS: Fields = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `Hello! Thank you for your participation in ${data.name}. We hope you enjoyed and learned new things from this ${data.name}. Please fill out this anonymous feedback form below!`,
    ],
  },
  eventSource: {
    input: "select",
    title: `How did you find ${data.name}?`,
    options: SOURCES,
    field: "eventSource",
    placeholder: "ie. Social Media",
    width: 12,
    required: true,
    editable: true,
    searchable: true,
  },
  helpful: {
    input: "textarea",
    name: "helpful",
    rows: 4,
    title: `What was most helpful about ${data.name}?`,
    placeholder: "ie. The officers",
    width: 12,
    required: true,
    editable: true,
  },
  improvements: {
    input: "textarea",
    name: "improvements",
    rows: 4,
    title: `Was there anything that you would have liked to see at ${data.name}?`,
    placeholder: "ie. More food",
    width: 12,
    required: true,
    editable: true,
  },
  notBenficial: {
    input: "textarea",
    name: "notBenficial",
    rows: 4,
    title: `Was there anything that you did not find beneficial about ${data.name}?`,
    placeholder: "N/A",
    width: 12,
    required: true,
    editable: true,
  },
  rating: {
    input: "radio",
    text: `Please rate ${data.name} on a scale of 1 - 10. 1 being the worst experience and 10 being the best experience`,
    options: RATE,
    field: "rating",
    width: 12,
    required: true,
    editable: true,
  },
  additionalComments: {
    input: "textarea",
    name: "additionalComments",
    rows: 4,
    title: `Is there anything else you'd like to let us know about ${data.name}?`,
    placeholder: "N/A",
    width: 12,
    required: true,
    editable: true,
  },
};

export const ATTRIBUTES: Attributes = {
  helpful: "",
  improvements: "",
  notBeneficial: "",
  rating: "",
  eventSource: "",
  additionalComments: "",
};
