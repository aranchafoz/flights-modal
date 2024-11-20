type QuotaReasons = string[];

export const ADD_QUOTA_REASONS: QuotaReasons = [
  "Subscriber canceled flight",
  "Airline canceled flight",
  "Customer compensation",
  "Other",
];

export const REMOVE_QUOTA_REASONS: QuotaReasons = [
  "Flight not redeposited after a flight cancellation",
  "Subscriber had log in or password issues",
  "Subscriber had issues when booking",
  "Subscription has not renewed correctly",
  "Other",
];

export type EditQuotaType = "increase" | "decrease";

export const QUOTA_REASONS_FOR_TYPE: { [key in EditQuotaType]: QuotaReasons } =
  {
    increase: ADD_QUOTA_REASONS,
    decrease: REMOVE_QUOTA_REASONS,
  };
