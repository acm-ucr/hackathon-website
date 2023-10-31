export const checkServer = (data) => {
  const errors = [];

  for (const key in data.textInputs) {
    if (data.textInputs[key].length > 100) {
      errors.push("Text input ${key} exceeds 100 characters.");
    }
  }

  for (const key in data.base64Files) {
    if (data.base64Files[key].length > 200 * 1024 * 1024) {
      errors.push("File ${key} exceeds 200MB.");
    }
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return { valid: true };
};
