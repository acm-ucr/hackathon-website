export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      "Welcome to HACKATHON_NAME. Thank you for taking interestin in HACKAHTON_NAME, we appreciate your efforts to help support HACKATHON_NAME. HACKATHON_NAME is a DESCRIPTION hackathon spanning HACKATHON_LENGTH on HACKATHON_DATE.",
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
