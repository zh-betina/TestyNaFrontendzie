import React from "react";
// eslint-disable-next-line import/no-unresolved
import { render, screen } from "test-utils";
import { Currency } from "../../types/Currency";
import { ProductElement } from "../ProductElement";

const renderProductElement = (contextValue) => {
  const product = {
    id: "1",
    name: "Super produkt",
    price: [
      { currency: Currency.PLN, price: 2000 },
      { currency: Currency.USD, price: 450 },
      { currency: Currency.EUR, price: 500 },
    ],
    quantity: 1,
  };

  const value = { state: { selectedCurrency: contextValue } };
  return render(
    <ProductElement
      product={product}
      addToCart={jest.fn()}
      removeFromCart={jest.fn()}
      cart={[]}
    />,
    { value }
  );
};

describe("<ProductElement />", () => {
  it.each`
    currency        | expected
    ${Currency.PLN} | ${"20 zł"}
    ${Currency.USD} | ${"4.5 $"}
    ${Currency.EUR} | ${"5 €"}
  `(
    "displays correct price in $currency when user selected that currency",
    ({ currency, expected }) => {
      renderProductElement(currency);
      screen.getByText(expected);
    }
  );
});
