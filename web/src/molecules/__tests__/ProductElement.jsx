import React from "react";
import { render, screen } from "@testing-library/react";
import { Currency } from "../../types/Currency";
import { ProductElement } from "../ProductElement";
import { CurrencyProvider } from "../../currencyContext/CurrencyContext";

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
    <CurrencyProvider value={value}>
      <ProductElement
        product={product}
        addToCart={jest.fn()}
        removeFromCart={jest.fn()}
        cart={[]}
      />
    </CurrencyProvider>
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

/*


 */
