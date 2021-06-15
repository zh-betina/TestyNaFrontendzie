import React from "react";
import { TFunction, useTranslation } from "react-i18next";
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
export const PromotionDuration = ({
  promotion,
}: PromotionDurationProps): JSX.Element => {
  const { t } = useTranslation();
  const promotionDuration = getPromotionDuration(new Date(), promotion.dateEnd);
  return (
    <div>
      {t("The promotion runs for {value}", {
        value: getPromotionDurationInText(promotionDuration, t),
      })}
    </div>
  );
};

const getPromotionDurationInText = (
  promotionDuration: PromotionDurationOutput,
  translate: TFunction
): string => {
  switch (promotionDuration.type) {
    case PromotionDurationType.days:
      return translate("about {value} days", {
        value: promotionDuration.value,
      });
    case PromotionDurationType.time:
      return `${(promotionDuration.value as Time).hours}:${
        (promotionDuration.value as Time).minutes
      }:${(promotionDuration.value as Time).seconds}`;
    case PromotionDurationType.hours:
      return translate("about {value} hours", {
        value: promotionDuration.value,
      });
    case PromotionDurationType.weeks:
      return translate("about {value} weeks", {
        value: promotionDuration.value,
      });
    case PromotionDurationType.months:
      return translate("about {value} months", {
        value: promotionDuration.value,
      });
    default:
      return "";
  }
};
