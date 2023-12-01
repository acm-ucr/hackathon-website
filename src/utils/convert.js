import Compressor from "compressorjs";

export const readFileAsBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const compress = (file) => {
  if (file.type.split("/")[0] !== "image") return file;

  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.8,
      maxWidth: 800,
      maxHeight: 800,
      success(result) {
        resolve(result);
      },
      error(err) {
        reject(err);
      },
    });
  });
};
