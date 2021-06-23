import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { CartItem } from "../state/cart";
import { displayPrice } from "../utils/money";
import { Cell, Name, Row } from "../atoms/Row";

interface ListElementProps {
  product: CartItem;
  onRemove: () => void;
  onAdd: () => void;
}

const Button = styled.button`
  border-radius: 50%;
  border: 1px solid #a0816c;
  color: #a0816c;
  width: 25px;
  height: 25px;
  background-color: transparent;
  margin: 0 10px;

  &:disabled {
    color: gray;
    border-color: gray;
  }
`;

const ListElement = ({
  product,
  onRemove,
  onAdd,
}: ListElementProps): JSX.Element => {
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <Row>
      <Name>
        {product.name[language]} - {product.brand}
      </Name>
      <Cell data-testid="product-price">{displayPrice(product.price)}</Cell>
      <Cell>
        <Button disabled={product.quantity < 1} onClick={onRemove}>
          -1
        </Button>
        <span data-testid="product-quantity">{product.quantity}</span>
        <Button onClick={onAdd}>+1</Button>
      </Cell>
      <Cell data-testid="summary-price">
        {displayPrice(product.price, product.quantity)}
      </Cell>
    </Row>
  );
};

export default ListElement;
