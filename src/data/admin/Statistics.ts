type Code = "1" | "0" | "-1";
type LabelCode = "Pending" | "Accepted" | "Rejected";
interface roles {
  label: LabelCode;
  className: string;
  fill: string;
}
export const ROLES: Record<Code, roles> = {
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
type SizeCode = "XS" | "S" | "M" | "L" | "XL" | "XXL";
type Sizeagain =
  | "Extra Small"
  | "Small"
  | "Medium"
  | "Large"
  | "Extra Large"
  | "Double Extra Large";
interface sizes {
  label: Sizeagain;
  className: string;
  fill: string;
}
export const SIZES: Record<SizeCode, sizes> = {
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
