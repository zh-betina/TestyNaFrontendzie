import { Time } from "./Time";

export enum PromotionDurationType {
  time = "time",
  hours = "hours",
  days = "days",
  weeks = "weeks",
  months = "months",
}

export type PromotionDurationOutput = {
  value: number | Time;
  type: PromotionDurationType;
};
