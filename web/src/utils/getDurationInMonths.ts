import {
  PromotionDurationOutput,
  PromotionDurationType,
} from "../types/PromotionDurationType";

export const getDurationInMonths = (days: number): PromotionDurationOutput => {
  if (Number.isNaN(Number(days))) {
    throw new Error("Days should be number");
  }

  const approximateNumberOfMonths = Math.round(days / 30);

  return {
    type: PromotionDurationType.months,
    value: approximateNumberOfMonths,
  };
};
