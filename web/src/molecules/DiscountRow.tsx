import { useSelector } from "@xstate/react";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { Cell, Name, Row } from "../atoms/Row";
import { MachineContext } from "../MachineContext";
import { getDiscounts } from "../state/selectors";
import { displayPrice } from "../utils/money";

const DiscountRow = (): JSX.Element => {
  const { t } = useTranslation();
  const machine = useContext(MachineContext);
  const discountValue = useSelector(machine, getDiscounts);
  const discount = useSelector(
    machine,
    (state) => state.context.appliedDiscount
  );
  return (
    <>
      {discount ? (
        <Row>
          <Name>
            {t("Discount")}: {discount?.code} (-{discount?.percentage}%)
          </Name>
          <Cell>-{displayPrice(discountValue)}</Cell>
        </Row>
      ) : null}
    </>
  );
};

export default DiscountRow;
