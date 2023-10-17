import { MANIFEST } from "@/data/Config";

const manifest = () => {
  return {
    name: MANIFEST.name,
    short_name: MANIFEST.short_name,
    description: MANIFEST.description,
    start_url: MANIFEST.start_url,
  };
};

export default manifest;
