import { CONFIG } from "../../Config";
import { SOURCES } from "./Information";

const RATE = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `Hello! Thank you for your participation in ${CONFIG.name}. We hope you enjoyed and learned some things from this event. Please fill out this anonymous feedback form below!`,
    ],
  },

  "What was most helpful about the event?": {
    input: "textarea",
    name: "What was most helpful about the event?",
    rows: 4,
    title: "What was most helpful about the event?",
    placeholder: "Workshops, team collaboration, mentorship...",
    width: 12,
    required: true,
  },
  "Was there anything that you would have liked to see?": {
    input: "textarea",
    name: "Was there anything that you would have liked to see?",
    rows: 4,
    title: "Was there anything that you would have liked to see?",
    placeholder: "",
    width: 12,
    required: true,
  },
  "Was there anything that you did not find beneficial about the hackathon?": {
    input: "textarea",
    name: "Was there anything that you did not find beneficial about the hackathon?",
    rows: 4,
    title:
      "Was there anything that you did not find beneficial about the hackathon?",
    placeholder: "",
    width: 12,
    required: true,
  },
  rate: {
    input: "radio",
    text: "How would you rate the hackathon?",
    options: RATE,
    field: "rate",
    width: 12,
    required: true,
  },

  "How did you find the event?": {
    input: "select",
    title: "How did you find the event?",
    options: SOURCES,
    field: "How did you find the event?",
    placeholder: "Devpost",
    width: 12,
    required: true,
  },
  "Is there anything else you'd like to let us know?": {
    input: "textarea",
    name: "Is there anything else you'd like to let us know?",
    rows: 4,
    title: "Is there anything else you'd like to let us know?",
    placeholder: "Literally anything...",
    width: 12,
  },
};

export const ATTRIBUTES = {
  "What was most helpful about the event?": "",
  "Was there anything that you would have liked to see?": "",
  "Was there anything that you did not find beneficial about the hackathon?":
    "",
  rate: "",
  "How did you find the event?": "",
  "Is there anything else you'd like to let us know?": "",
};
