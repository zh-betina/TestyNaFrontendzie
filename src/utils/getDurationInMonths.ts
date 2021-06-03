import {
  PromotionDurationOutput,
  PromotionDurationType,
} from "../types/PromotionDurationType";

export const getDurationInMonths = (days: number): PromotionDurationOutput => {
  if (days < 30) {
    throw new Error("Days should be greater than 30");
  }

  const approximateNumberOfMonths = Math.round(days / 30);

  return {
    type: PromotionDurationType.months,
    value: approximateNumberOfMonths,
  };
};
