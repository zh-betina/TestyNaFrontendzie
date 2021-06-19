import { Time } from "./Time";

export enum PromotionDurationType {
  time = "time",
  hours = "hours",
  days = "days",
  weeks = "weeks",
  months = "months",
  finished = "finished",
}

export type PromotionDurationOutput = {
  value: number | Time;
  type: PromotionDurationType;
};
