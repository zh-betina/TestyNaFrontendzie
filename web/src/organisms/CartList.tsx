import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Cell, Name, Row } from "../atoms/Row";
import ListElement from "../molecules/ListElement";
import { displayPrice } from "../utils/money";

import { getDiscountedSum } from "../state/selectors";
import { CartItem, addProduct, removeProduct } from "../state/cart";
import DiscountRow from "../molecules/DiscountRow";
import SumRow from "../molecules/SumRow";
import { useAppDispatch, useAppSelector } from "../state/store";

const List = styled.section`
  padding-bottom: 10px;
  border-bottom: 2px solid #a0816c;
  height: 200px;
  overflow: scroll;
`;

const Info = styled.section`
  display: flex;
  height: 200px;
  justify-content: center;
`;

const CartList = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const discounted = useAppSelector(getDiscountedSum);
  const cart = useAppSelector((state) => state.cart.items);

  if (cart.length === 0) {
    return <Info>{t("Your cart is empty")}</Info>;
  }

  return (
    <>
      <List>
        {cart.map((elem: CartItem) => (
          <ListElement
            key={elem.id}
            product={elem}
            onRemove={() => dispatch(removeProduct({ productId: elem.id }))}
            onAdd={() => dispatch(addProduct({ productId: elem.id }))}
          />
        ))}
      </List>
      <SumRow />
      <DiscountRow />
      <Row>
        <Name>{t("To pay")}:</Name>
        <Cell>{displayPrice(discounted)}</Cell>
      </Row>
    </>
  );
};

export default CartList;
