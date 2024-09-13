import data from "@/data/Config";

interface Manifest {
  name: string;
  short_name: string;
  description: string;
  start_url: string;
}

const manifest = (): Manifest => {
  return {
    name: data.name,
    short_name: data.short_name,
    description: data.description,
    start_url: "/",
  };
};

export default manifest;
