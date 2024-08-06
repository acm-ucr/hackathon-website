type Code = "1" | "0" | "-1";
type Status = "accepted" | "pending" | "rejected";

export const STATUSES: Record<Code, Status> = {
  1: "accepted",
  0: "pending",
  "-1": "rejected",
};
