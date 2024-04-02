import data from "../Config";
import { SOURCES } from "./Information";

const RATE = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export const FIELDS = {
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
    placeholder: "Event Source",
    width: 12,
    required: true,
  },
  helpful: {
    input: "textarea",
    name: "helpful",
    rows: 4,
    title: `What was most helpful about ${data.name}?`,
    placeholder: "N/A",
    width: 12,
    required: true,
  },
  improvements: {
    input: "textarea",
    name: "improvements",
    rows: 4,
    title: `Was there anything that you would have liked to see at ${data.name}?`,
    placeholder: "N/A",
    width: 12,
    required: true,
  },
  notBenficial: {
    input: "textarea",
    name: "notBenficial",
    rows: 4,
    title: `Was there anything that you did not find beneficial about ${data.name}?`,
    placeholder: "N/A",
    width: 12,
    required: true,
  },
  rating: {
    input: "radio",
    text: `Please rate ${data.name} on a scale of 1 - 10. 1 being the worst experience and 10 being the best experience`,
    options: RATE,
    field: "rating",
    width: 12,
    required: true,
  },
  additionalComments: {
    input: "textarea",
    name: "additionalComments",
    rows: 4,
    title: `Is there anything else you'd like to let us know about ${data.name}?`,
    placeholder: "N/A",
    width: 12,
  },
};

export const ATTRIBUTES = {
  helpful: "",
  improvements: "",
  notBeneficial: "",
  rating: "",
  eventSource: "",
  additionalComments: "",
};
