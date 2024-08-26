type code = "1" | "0" | "-1";
type labels = "Pending" | "Accepted" | "Rejected";
interface roles {
  label: labels;
  className: string;
  fill: string;
}
export const ROLES: Record<code, roles> = {
  0: {
    label: "Pending",
    className: "fill-hackathon-yellow-100",
    fill: "bg-hackathon-yellow-100",
  },
  1: {
    label: "Accepted",
    className: "fill-hackathon-green-200",
    fill: "bg-hackathon-green-200",
  },
  "-1": {
    label: "Rejected",
    className: "fill-hackathon-tags-red-text",
    fill: "bg-hackathon-tags-red-text",
  },
};

type sizesShort = "XS" | "S" | "M" | "L" | "XL" | "XXL";
type sizesLong =
  | "Extra Small"
  | "Small"
  | "Medium"
  | "Large"
  | "Extra Large"
  | "Double Extra Large";
interface sizes {
  label: sizesLong;
  className: string;
  fill: string;
}
export const SIZES: Record<sizesShort, sizes> = {
  XS: {
    label: "Extra Small",
    className: "fill-hackathon-tags-pink-text",
    fill: "bg-hackathon-tags-pink-text",
  },
  S: {
    label: "Small",
    className: "fill-hackathon-yellow-100",
    fill: "bg-hackathon-yellow-100",
  },
  M: {
    label: "Medium",
    className: "fill-hackathon-green-200",
    fill: "bg-hackathon-green-200",
  },
  L: {
    label: "Large",
    className: "fill-hackathon-tags-red-text",
    fill: "bg-hackathon-tags-red-text",
  },
  XL: {
    label: "Extra Large",
    className: "fill-hackathon-tags-purple-text",
    fill: "bg-hackathon-tags-purple-text",
  },
  XXL: {
    label: "Double Extra Large",
    className: "fill-hackathon-tags-teal-text",
    fill: "bg-hackathon-tags-teal-text",
  },
};

export const DIETS = {
  Vegan: {
    label: "Vegan",
    className: "fill-hackathon-tags-pink-text",
    fill: "bg-hackathon-tags-pink-text",
  },
  Lactose: {
    label: "Lactose Intolerant",
    className: "fill-hackathon-yellow-100",
    fill: "bg-hackathon-yellow-100",
  },
  Gluten: {
    label: "No Gluten",
    className: "fill-hackathon-green-200",
    fill: "bg-hackathon-green-200",
  },
  Vegitarian: {
    label: "Vegetarian",
    className: "fill-hackathon-tags-red-text",
    fill: "bg-hackathon-tags-red-text",
  },
  Nut: {
    label: "Nut Allergy",
    className: "fill-hackathon-tags-purple-text",
    fill: "bg-hackathon-tags-purple-text",
  },
  Halal: {
    label: "Halal",
    className: "fill-hackathon-tags-teal-text",
    fill: "bg-hackathon-tags-teal-text",
  },
};
