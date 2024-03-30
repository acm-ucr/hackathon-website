import { DATA } from "@/data/Config";

const manifest = () => {
  return {
    name: DATA.name,
    short_name: DATA.short_name,
    description: DATA.description,
    start_url: DATA.start_url,
  };
};

export default manifest;
