import React from "react";
import styled from "styled-components";
import { getPromotionDuration } from "../utils/getPromotionDuration";
import { getPromotions } from "../mocks/getPromotion";
import { getCurrentTheBestPromotion } from "../utils/getCurrentTheBestPromotion";
import {
  PromotionDurationOutput,
  PromotionDurationType,
} from "../types/PromotionDurationType";
import { Time } from "../types/Time";

type PromotionBannerProps = {
  onClose: () => void;
};

export const PromotionBanner = ({
  onClose,
}: PromotionBannerProps): JSX.Element => {
  const promotions = getPromotions();
  const currentPromotion = getCurrentTheBestPromotion(promotions);

  if (!currentPromotion) {
    return <></>;
  }

  const promotionDuration = getPromotionDuration(
    new Date(),
    currentPromotion.dateEnd
  );

  return (
    <BannerContainer>
      <CloseButton onClick={() => onClose()}>X</CloseButton>
      <Description>{currentPromotion.description}</Description>
      <HeaderBanner>UŻYJ KODU RABATOWEGO</HeaderBanner>
      <CodeContainer>{currentPromotion.discount.code}</CodeContainer>
      <div>
        {`Promocja trwa jeszcze ${getPromotionDurationInText(
          promotionDuration
        )}`}
      </div>
    </BannerContainer>
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

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 1px;
  cursor: pointer;
  user-select: none;
`;

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    margin: 10px 0;
  }
`;

const HeaderBanner = styled.div`
  font-weight: bold;
`;

const CodeContainer = styled.div`
  background: #d42f2f;
  color: white;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  user-select: none;
`;

const Description = styled.div`
  text-align: center;
  width: 60%;
`;
