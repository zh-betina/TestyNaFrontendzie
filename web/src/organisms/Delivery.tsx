import { useSelector, useService } from "@xstate/react";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import styled from "styled-components";
import ListHeader from "../atoms/ListHeader";
import { Cell, Name, Row } from "../atoms/Row";
import { MachineContext } from "../MachineContext";
import { getDiscountedSum } from "../state/selectors";
import { shipmentMethods } from "../types/ShipmentMethod";
import { displayPrice } from "../utils/money";
import { getCurrentPrice } from "../utils/getCurrentPrice";
import CurrencyContext from "../currencyContext/CurrencyContext";

const DeliveryContainer = styled.section`
  margin-top: 20px;
`;

const Delivery = (): JSX.Element => {
  const { selectedCurrency } = useContext(CurrencyContext.Context);
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const machine = useContext(MachineContext);
  const [current, send] = useService(machine);
  const shipment = current.context.shipmentMethod;
  const discountedSum = useSelector(machine, getDiscountedSum);

  return (
    <DeliveryContainer>
      <ListHeader>{t("Delivery")}</ListHeader>
      {shipmentMethods.map((method) => {
        const isNotFreeDelivery =
          getCurrentPrice(discountedSum, selectedCurrency) <
          ((method && getCurrentPrice(method.freeFrom, selectedCurrency)) ??
            Infinity);
        return (
          <Row key={method.type}>
            <Name>
              <label htmlFor={method.type}>
                <input
                  type="radio"
                  name="shipment"
                  id={method.type}
                  value={method.type}
                  checked={shipment?.type === method.type}
                  onChange={() =>
                    send("CHOOSE_SHIPMENT", { methodType: method.type })
                  }
                />
                {method.name[language]}
              </label>
            </Name>
            <Cell>
              {isNotFreeDelivery ? displayPrice(method.price) : t("free")}
            </Cell>
          </Row>
        );
      })}
    </DeliveryContainer>
  );
};

export default Delivery;
