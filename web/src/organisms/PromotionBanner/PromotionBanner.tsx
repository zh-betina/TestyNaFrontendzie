import React from "react";
import styled from "styled-components";
import { PromotionHeader } from "./PromotionHeader";
import { PromotionDuration } from "./PromotionDuration";
import { Promotion } from "../../types/Promotion";

type PromotionBannerProps = {
  onClose: () => void;
  promotion: Promotion;
};

export const PromotionBanner = ({
  onClose,
  promotion,
}: PromotionBannerProps): JSX.Element => {
  return (
    <BannerContainer>
      <PromotionHeader onClose={onClose} promotion={promotion} />
      <PromotionDuration promotion={promotion} />
    </BannerContainer>
  );
};

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
