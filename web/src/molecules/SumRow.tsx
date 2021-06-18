import React from "react";
import { useTranslation } from "react-i18next";

import { Cell, Name, Row } from "../atoms/Row";
import { getSum } from "../state/selectors";
import { useAppSelector } from "../state/store";
import { displayPrice } from "../utils/money";

const SumRow = (): JSX.Element => {
  const { t } = useTranslation();
  const sum = useAppSelector(getSum);

  return (
    <Row>
      <Name>{t("Total")}:</Name>
      <Cell>{displayPrice(sum)}</Cell>
    </Row>
  );
};

export default SumRow;
