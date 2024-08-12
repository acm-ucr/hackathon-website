import data from "@/data/Config";

const manifest = () => {
  return {
    name: data.name,
    short_name: data.short_name,
    description: data.description,
  };
};

export default manifest;
