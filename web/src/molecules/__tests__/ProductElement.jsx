import React from 'react'
import {render, screen} from '@testing-library/react';
import {ProductElement} from "../ProductElement";
import {Currency} from "../../types/Currency";
import {CurrencyProvider} from "../../currencyContext/CurrencyContext";

describe('<ProductElement /> ', () => {
  const renderProductElement = (contextValue) => {
    const product = {
      id: "1",
      name: "Super produkt",
      quantity: 1,
      price: [
        { currency: Currency.PLN, price: 2500 },
        { currency: Currency.USD, price: 450 },
        { currency: Currency.EUR, price: 500 },
      ]
    }
    const value = {state: {selectedCurrency: contextValue}}
    render(
        <CurrencyProvider value={value}>
          <ProductElement product={product} cart={[]} addToCart={jest.fn()} removeFromCart={jest.fn()} />
        </CurrencyProvider>
    )
  }

  it.each`
   currency | expected
   ${Currency.PLN} | ${'25 zł'}
   ${Currency.USD} | ${'4.5 $'}
   ${Currency.EUR} | ${'5 €'}
  `('displays correct price in $currency when user selected that currency', ({currency, expected}) => {
    renderProductElement(currency);
    expect(screen.getByText(expected));
  });
});