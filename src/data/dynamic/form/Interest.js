import { METADATA } from "@/data/Config";

export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `Welcome to ${METADATA.name}. Thank you for taking interest in ${METADATA.name}, we appreciate your efforts to help support ${METADATA.name}. ${METADATA.name} is a ${METADATA.description} hackathon spanning ${METADATA.length} on ${METADATA.date}.`,
      "This is simply an interest form, once applications are released, you will be notified immediately and will be required to register again. We hope to see you there!",
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
};

export const ATTRIBUTES = {
  name: "",
  email: "",
};
