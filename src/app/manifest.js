import data from "@/data/Config";

const manifest = () => {
  return {
    name: data.name,
    short_name: data.short_name,
    description: data.description,
    start_url: "/",
  };
};

export default manifest;
