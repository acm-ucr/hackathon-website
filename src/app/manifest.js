import DATA from "@/data/Config";

const manifest = () => {
  return {
    name: DATA.MANIFEST.name,
    short_name: DATA.MANIFEST.short_name,
    description: DATA.MANIFEST.description,
    start_url: DATA.MANIFEST.start_url,
  };
};

export default manifest;
