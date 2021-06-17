import { useSelector } from "@xstate/react";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { Cell, Name, Row } from "../atoms/Row";
import { MachineContext } from "../MachineContext";
import { getDelivery, getDiscountedSum } from "../state/selectors";
import { displayPrice } from "../utils/money";
import { getCurrentPrice } from "../utils/getCurrentPrice";
import { useCurrency } from "../currencyContext/CurrencyContext";

const DeliveryRow = (): JSX.Element => {
  const {
    state: { selectedCurrency },
  } = useCurrency();
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const machine = useContext(MachineContext);
  const delivery = useSelector(machine, getDelivery);
  const discountedSum = useSelector(machine, getDiscountedSum);
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
