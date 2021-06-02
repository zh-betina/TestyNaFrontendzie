export const getDurationInMonths = (days: number): string => {
  if (days < 30) {
    throw new Error("Days should be greater than 30");
  }

  const approximateNumberOfMonths = Math.round(days / 30);

  return `about ${approximateNumberOfMonths} months`;
};
