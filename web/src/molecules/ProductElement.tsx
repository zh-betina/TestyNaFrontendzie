import { useHistory } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import { useTranslation } from "react-i18next";
import { Product } from "../types/Product";
import addToCartImage from "../assets/icons/add-to-cart.png";
import removeFromCartImage from "../assets/icons/remove-from-cart.png";
import Image from "../atoms/Image";
import { displayPrice } from "../utils/money";
import { useAppDispatch, useAppSelector } from "../state/store";
import { addProduct, removeProduct } from "../state/cart";

type ProductElementProps = {
  product: Product;
};

export const ProductElement = ({
  product,
}: ProductElementProps): JSX.Element => {
  const { i18n } = useTranslation();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);

  const addToCart = () => {
    dispatch(addProduct({ productId: product._id }));
  };

  const removeFromCart = () => {
    dispatch(removeProduct({ productId: product._id }));
  };

  const inCart = cart.some((item) => item.id === product._id);

  return (
    <MainContainer>
      <NameContainer onClick={() => history.push(`/product/${product._id}`)}>
        {product.name[i18n.language]} - {product.brand}
      </NameContainer>
      <PriceContainer>{displayPrice(product.price)}</PriceContainer>
      {inCart ? (
        <Button onClick={removeFromCart}>
          <Image alt="removeFromCart" src={removeFromCartImage} />
        </Button>
      ) : (
        <Button onClick={addToCart}>
          <Image alt="addToCart" src={addToCartImage} />
        </Button>
      )}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  cursor: pointer;
  :hover {
    background: silver;
  }
`;

const NameContainer = styled.div`
  flex-grow: 1;
`;

const PriceContainer = styled.div`
  margin-right: 20px;
`;

const Button = styled.div``;
