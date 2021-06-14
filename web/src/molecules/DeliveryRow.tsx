import { useSelector } from "@xstate/react";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { Cell, Name, Row } from "../atoms/Row";
import { MachineContext } from "../MachineContext";
import { getDelivery, getDiscountedSum } from "../state/selectors";
import { displayPrice } from "../utils/money";

const DeliveryRow = (): JSX.Element => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const machine = useContext(MachineContext);
  const delivery = useSelector(machine, getDelivery);
  const discountedSum = useSelector(machine, getDiscountedSum);
  return (
    <>
      {delivery ? (
        <Row>
          <Name>{delivery.name[language]}</Name>
          <Cell>
            {discountedSum < (delivery.freeFrom ?? Infinity)
              ? displayPrice(delivery.price)
              : t("free")}
          </Cell>
        </Row>
      ) : null}
    </>
  );
};

export default DeliveryRow;
