import { getDurationInMonths } from "./getDurationInMonths";
import { getDurationInWeeks } from "./getDurationInWeeks";

const dayInMilliSeconds = 1000 * 60 * 60 * 24;

export const getPromotionDurationInText = (
  startDate: Date,
  endDate: Date
): string => {
  const endDateTime = endDate.getTime();
  const startDateTime = startDate.getTime();

  const daysDifference = (endDateTime - startDateTime) / dayInMilliSeconds;

  if (daysDifference > 30) return getDurationInMonths(daysDifference);
  if (daysDifference > 10) return getDurationInWeeks(daysDifference);

  return `${daysDifference}`;
};
