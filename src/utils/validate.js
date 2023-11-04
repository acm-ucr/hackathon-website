export const validate = (data) => {
  data.strings.forEach((text, key) => {
    if (text.length > 100) {
      return {
        message: `Text input ${key} exceeds 100 characters.`,
        valid: false,
      };
    }
  });

  data.files.forEach((file, key) => {
    if (file.length > 200 * 1024 * 1024) {
      return { message: `File ${key} exceeds 200MB.`, valid: false };
    }
  });

  return { message: null, valid: true };
};
