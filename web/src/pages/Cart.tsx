import { useService } from "@xstate/react";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { MachineContext } from "../MachineContext";
import ListHeader from "../atoms/ListHeader";
import NavigationButton from "../atoms/NavigationButton";
import { Rest, Name, Row } from "../atoms/Row";
import CartList from "../organisms/CartList";
import Delivery from "../organisms/Delivery";
import Discount from "../organisms/Discount";
import TotalRow from "../molecules/TotalRow";
import Container from "../templates/Container";

const Cart = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Container>
      <ListHeader>{t("Cart")}:</ListHeader>
      <CartList />
      <Discount />
      <Delivery />
      <TotalRow />
      <Row>
        <Name>
          <NavigationButton to="/">
            {"<<"} {t("Products List")}
          </NavigationButton>
        </Name>
        <Rest>
          <NavigationButton to="/address">
            {t("Address")} {">>"}
          </NavigationButton>
        </Rest>
      </Row>
    </Container>
  );
};

export default Cart;
