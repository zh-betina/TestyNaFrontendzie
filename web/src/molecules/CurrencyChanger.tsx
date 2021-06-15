import React, { useContext } from "react";
import styled from "styled-components";
import CurrencyContext from "../currencyContext/CurrencyContext";
import { getAvailableCurrencies } from "../mocks/getAvailableCurrencies";
import { CurrencyContextAction } from "../currencyContext/actions";
import { Currency } from "../types/Currency";

export const CurrencyChanger = (): JSX.Element => {
  const { selectedCurrency, dispatch } = useContext(CurrencyContext.Context);
  const availableCurrencies = getAvailableCurrencies();

  const options = availableCurrencies.map((currency) => ({
    value: currency.currency,
    label: currency.name,
  }));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (dispatch) {
      dispatch({
        type: CurrencyContextAction.SET_CURRENT_CURRENCY,
        currentCurrency: event.target.value as Currency,
      });
    }
  };
  return (
    <Container>
      <select value={selectedCurrency} onChange={handleChange}>
        {options.map((opt) => {
          return (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 200px;
  top: 20px;
  right: 100px;
`;
