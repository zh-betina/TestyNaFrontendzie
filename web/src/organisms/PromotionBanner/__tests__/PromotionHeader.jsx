import React from "react";
// eslint-disable-next-line import/no-unresolved
import { render, screen } from "test-utils";
import user from "@testing-library/user-event";
import { PromotionHeader } from "../PromotionHeader";

describe("<PromotionHeader/>", () => {
  const getPromotion = (percentage = 20) => ({
    id: "1",
    name: "Promocja Testowa",
    description: {
      pl: "WIELKA PROMOCJA!",
      en: "BIG SALE",
    },
    startDate: new Date("2021-02-20"),
    endDate: new Date("2021-06-20"),
    discount: {
      code: "KOD_W_WORKU",
      percentage,
    },
  });

  it("should display all needed information about the promotion", () => {
    const promotion = getPromotion();
    render(<PromotionHeader onClose={jest.fn()} promotion={promotion} />);
    const descriptionDiv = screen.getByText(promotion.description.en);
    expect(descriptionDiv).toBeDefined();

    const promotionCodeDiv = screen.getByText(promotion.discount.code);
    expect(promotionCodeDiv).toBeDefined();

    const promotionName = screen.queryByText(promotion.name);
    expect(promotionName).toBeNull();
  });
  it("should make ability for user to click on close button", () => {
    const promotion = getPromotion();
    const onCloseMock = jest.fn();
    render(<PromotionHeader onClose={onCloseMock} promotion={promotion} />);

    const closeButton = screen.getByText("X");
    expect(closeButton).toBeDefined();

    user.click(closeButton);

    expect(onCloseMock).toBeCalled();
    expect(onCloseMock).toBeCalledTimes(1);
  });
  it("should display special offer information for big discount", () => {
    const promotion = getPromotion(55);
    const { rerender } = render(
      <PromotionHeader onClose={jest.fn()} promotion={promotion} />
    );

    const specialOfferInformation = screen.getByText(/special offer/i);
    expect(specialOfferInformation).toBeDefined();
    expect(specialOfferInformation).toContainHTML(
      `${promotion.discount.percentage}%`
    );

    rerender(
      <PromotionHeader onClose={jest.fn()} promotion={getPromotion(10)} />
    );
    const noSpecialOffer = screen.queryByText(/special offer/i);
    expect(noSpecialOffer).toBeNull();
  });
});
