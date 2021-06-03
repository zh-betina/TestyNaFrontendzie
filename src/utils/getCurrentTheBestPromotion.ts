import { Promotion } from "../types/Promotion";

export const getCurrentTheBestPromotion = (
  promotions: Promotion[]
): Promotion | null => {
  const currentDate = new Date();

  const currentPromotions = promotions.filter(
    (prom) => prom.dateStart < currentDate && prom.dateEnd > currentDate
  );

  if (!currentPromotions) {
    return null;
  }

  const sortedPromotions = currentPromotions.sort((next, prev) =>
    next.discount.percentage < prev.discount.percentage ? 1 : -1
  );

  return sortedPromotions[0];
};
