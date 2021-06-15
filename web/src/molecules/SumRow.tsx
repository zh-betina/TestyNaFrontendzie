import { useSelector } from "@xstate/react";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { Cell, Name, Row } from "../atoms/Row";
import { MachineContext } from "../MachineContext";
import { getSum } from "../state/selectors";
import { displayPrice } from "../utils/money";

const SumRow = (): JSX.Element => {
  const { t } = useTranslation();
  const machine = useContext(MachineContext);
  const sum = useSelector(machine, getSum);

  return (
    <Row>
      <Name>{t("Total")}:</Name>
      <Cell>{displayPrice(sum)}</Cell>
    </Row>
  );
};

export default SumRow;
