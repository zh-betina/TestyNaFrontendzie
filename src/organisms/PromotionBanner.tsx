import React from "react";
import { getPromotionDurationInText } from "../utils/getPromotionDurationInText";

export const PromotionBanner = () => {
  return (
    <div>
      {getPromotionDurationInText(new Date(), new Date(2021 - 10 - 22))}
    </div>
  );
};
