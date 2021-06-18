import React from "react";
import { useTranslation } from "react-i18next";

import { Cell, Name, Row } from "../atoms/Row";
import { getDiscounts } from "../state/selectors";
import { useAppSelector } from "../state/store";
import { displayPrice } from "../utils/money";

const DiscountRow = (): JSX.Element => {
  const { t } = useTranslation();
  const discountValue = useAppSelector(getDiscounts);
  const discount = useAppSelector((state) => state.cart.appliedDiscount);
  const amount = displayPrice(discountValue);
  return (
    <>
      {discount ? (
        <Row>
          <Name>
            {t("Discount")}: {discount?.code} (-{discount?.percentage}%)
          </Name>
          <Cell>-{amount}</Cell>
        </Row>
      ) : null}
    </>
  );
};

export default DiscountRow;
