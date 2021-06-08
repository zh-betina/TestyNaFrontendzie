import React from "react";
import { getPromotions } from "../../mocks/getPromotion";
import { getTheBestPromotionForDate } from "../../utils/getTheBestPromotionForDate";
import { PromotionBanner } from "./PromotionBanner";

type PromotionBannerWrapperProps = {
  onClose: () => void;
};
const PromotionBannerWrapper = ({ onClose }: PromotionBannerWrapperProps) => {
  const currentDate = new Date();
  const promotions = getPromotions();
  const currentPromotion = getTheBestPromotionForDate(currentDate, promotions);

  if (!currentPromotion) {
    return <></>;
  }

  return <PromotionBanner onClose={onClose} promotion={currentPromotion} />;
};

export default PromotionBannerWrapper;
