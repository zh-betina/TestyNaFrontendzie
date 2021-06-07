import React from "react";
import { getPromotionDuration } from "../../utils/getPromotionDuration";
import { Promotion } from "../../types/Promotion";
import {
  PromotionDurationOutput,
  PromotionDurationType,
} from "../../types/PromotionDurationType";
import { Time } from "../../types/Time";

type PromotionDurationProps = {
  promotion: Promotion;
};
export const PromotionDuration = ({ promotion }: PromotionDurationProps) => {
  const promotionDuration = getPromotionDuration(new Date(), promotion.dateEnd);
  return (
    <div>
      {`Promocja trwa jeszcze ${getPromotionDurationInText(promotionDuration)}`}
    </div>
  );
};

const getPromotionDurationInText = (
  promotionDuration: PromotionDurationOutput
) => {
  switch (promotionDuration.type) {
    case PromotionDurationType.days:
      return `około ${promotionDuration.value} dni`;
    case PromotionDurationType.time:
      return `${(promotionDuration.value as Time).hours}:${
        (promotionDuration.value as Time).minutes
      }:${(promotionDuration.value as Time).seconds}`;
    case PromotionDurationType.hours:
      return `około ${promotionDuration.value} godzin`;
    case PromotionDurationType.weeks:
      return `około ${promotionDuration.value} tygodni`;
    case PromotionDurationType.months:
      return `około ${promotionDuration.value} miesięcy`;
    default:
      return "";
  }
};
