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
    if (typeof file === "number") {
      if (file * 1024 * 1024 > 200 * 1024 * 1024) {
        return { message: `File ${key} exceeds 200MB.`, valid: false };
      }
    } else if (file.length > 800 * 1024 * 1024) {
      return { message: `File ${key} exceeds 800MB.`, valid: false };
    }
  });

  return { message: null, valid: true };
};
