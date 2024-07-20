import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => twMerge(clsx(inputs));

export const performDownload = async (src) => {
  const download = (filename, content) => {
    const element = document.createElement("a");
    element.setAttribute("href", content);
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const result = await fetch(src, {
    method: "GET",
    headers: {},
  });
  const blob = await result.blob();
  const url = URL.createObjectURL(blob);
  download("image", url);
  URL.revokeObjectURL(url);
};
