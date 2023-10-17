import { MANIFEST } from "@/data/Config";

export default function manifest() {
  return {
    name: MANIFEST.name,
    short_name: MANIFEST.short_name,
    description: MANIFEST.description,
    start_url: MANIFEST.start_url,
  };
}
