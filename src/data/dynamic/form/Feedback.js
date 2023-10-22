import { CONFIG } from "../../Config";
import { SOURCES } from "./Information";

const RATE = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `Hello! Thank you for your participation in ${CONFIG.name}. We hope you enjoyed and learned new things from this hackathon. Please fill out this anonymous feedback form below!`,
    ],
  },
  helpful: {
    input: "textarea",
    name: "helpful",
    rows: 4,
    title: "What was most helpful about the event?",
    placeholder: "N/A",
    width: 12,
    required: true,
  },
  improvements: {
    input: "textarea",
    name: "improvements",
    rows: 4,
    title: "Was there anything that you would have liked to see?",
    placeholder: "N/A",
    width: 12,
    required: true,
  },
  notBenficial: {
    input: "textarea",
    name: "notBenficial",
    rows: 4,
    title:
      "Was there anything that you did not find beneficial about the hackathon?",
    placeholder: "N/A",
    width: 12,
    required: true,
  },
  rating: {
    input: "radio",
    text: "Please rate the hackathon on a scale of 1 - 10. 1 being the worst experience and 10 being the best experience",
    options: RATE,
    field: "rating",
    width: 12,
    required: true,
  },

  eventSource: {
    input: "select",
    title: "How did you find the event?",
    options: SOURCES,
    field: "eventSource",
    placeholder: "Event Source",
    width: 12,
    required: true,
  },
  additionalComments: {
    input: "textarea",
    name: "additionalComments",
    rows: 4,
    title: "Is there anything else you'd like to let us know?",
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
