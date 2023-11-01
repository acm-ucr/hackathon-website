export const checkServer = (data) => {
  const errors = [];

  data.textInputs.forEach((textInput, key) => {
    if (textInput.length > 100) {
      errors.push("Text input ${key} exceeds 100 characters.");
    }
  });

  data.base64Files.forEach((file, key) => {
    if (file.length > 200 * 1024 * 1024) {
      errors.push("File ${key} exceeds 200MB.");
    }
  });

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return { valid: true };
};
