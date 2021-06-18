import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { Cell, Name, Row } from "../atoms/Row";
import { MachineContext } from "../MachineContext";
import { getDelivery, getDiscountedSum } from "../state/selectors";
import { displayPrice } from "../utils/money";
import CurrencyContext from "../currencyContext/CurrencyContext";
import { getCurrentPrice } from "../utils/getCurrentPrice";
import { useAppSelector } from "../state/store";

const DeliveryRow = (): JSX.Element => {
  const { selectedCurrency } = useContext(CurrencyContext.Context);
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const delivery = useAppSelector(getDelivery);
  const discountedSum = useAppSelector(getDiscountedSum);
  const isNotFreeDelivery =
    getCurrentPrice(discountedSum, selectedCurrency) <
    ((delivery && getCurrentPrice(delivery.freeFrom, selectedCurrency)) ??
      Infinity);

  return (
    <>
      {delivery ? (
        <Row>
          <Name>{delivery.name[language]}</Name>
          <Cell>
            {isNotFreeDelivery ? displayPrice(delivery.price) : t("free")}
          </Cell>
        </Row>
      ) : null}
    </>
  );
};

export default DeliveryRow;
