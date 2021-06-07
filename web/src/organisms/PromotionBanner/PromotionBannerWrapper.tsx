import React from "react";
import { getPromotions } from "../../mocks/getPromotion";
import { getCurrentTheBestPromotion } from "../../utils/getCurrentTheBestPromotion";
import { PromotionBanner } from "./PromotionBanner";

type PromotionBannerWrapperProps = {
  onClose: () => void;
};
const PromotionBannerWrapper = ({ onClose }: PromotionBannerWrapperProps) => {
  const promotions = getPromotions();
  const currentPromotion = getCurrentTheBestPromotion(promotions);

  if (!currentPromotion) {
    return <></>;
  }

  return <PromotionBanner onClose={onClose} promotion={currentPromotion} />;
};

export default PromotionBannerWrapper;
