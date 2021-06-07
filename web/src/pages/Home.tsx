import * as React from "react";
import { useEffect, useState } from "react";
import { Products } from "../organisms/Products";
import Container from "../templates/Container";
import ListHeader from "../atoms/ListHeader";
import { Header } from "../organisms/Header";
import { PromotionBanner } from "../organisms/PromotionBanner/PromotionBanner";
import PromotionBannerWrapper from "../organisms/PromotionBanner/PromotionBannerWrapper";

export const Home = (): JSX.Element => {
  const [showPromotionBanner, setShowPromotionBanner] =
    useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPromotionBanner(true);
    }, 3000);
  }, []);

  return (
    <>
      {showPromotionBanner ? (
        <Container>
          <PromotionBannerWrapper
            onClose={() => setShowPromotionBanner(false)}
          />
        </Container>
      ) : null}
      <Container>
        <Header />
        <ListHeader>Produkty:</ListHeader>
        <Products />
      </Container>
    </>
  );
};
