export const getDurationInWeeks = (days: number): string => {
  if (days > 30) {
    throw new Error("Days should be shorter than 30");
  }

  if (days < 10) {
    throw new Error("Days should be greater than 10");
  }

  const approximateNumberOfWeeks = Math.round(days / 7);

  return `about ${approximateNumberOfWeeks} weeks`;
};
