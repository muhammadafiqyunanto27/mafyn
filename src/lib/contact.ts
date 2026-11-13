export const PROJECT_TYPES = [
  "Website",
  "Web application",
  "Backend / API",
  "Maintenance & support",
  "Not sure",
] as const;

export const BUDGET_RANGES = [
  "Not sure yet",
  "Under Rp 10 million",
  "Rp 10–30 million",
  "Rp 30–75 million",
  "Above Rp 75 million",
] as const;

export type ContactField =
  | "name"
  | "email"
  | "company"
  | "projectType"
  | "budget"
  | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<ContactField, string>>;
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
  errors: {},
};
