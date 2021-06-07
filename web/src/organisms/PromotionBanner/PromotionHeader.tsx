import React from "react";
import styled from "styled-components";
import { Promotion } from "../../types/Promotion";

type PromotionHeaderProps = {
  onClose: () => void;
  promotion: Promotion;
};
export const PromotionHeader = ({
  onClose,
  promotion,
}: PromotionHeaderProps) => {
  const promotionPercentage = promotion.discount.percentage;
  const isSpecialOffer = () => promotionPercentage > 40;
  return (
    <>
      <CloseButton onClick={() => onClose()}>X</CloseButton>
      <Description>{promotion.description}</Description>
      <HeaderBanner>UŻYJ KODU RABATOWEGO</HeaderBanner>
      {isSpecialOffer() ? (
        <div>OFERTA SPECJALNA - {promotionPercentage}%</div>
      ) : null}
      <CodeContainer>{promotion.discount.code}</CodeContainer>
    </>
  );
};

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 1px;
  cursor: pointer;
  user-select: none;
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
