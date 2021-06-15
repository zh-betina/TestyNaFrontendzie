import { useContext } from "react";
import { Price } from "../types/Price";
import { getCurrentPrice } from "./getCurrentPrice";
import { getCurrentUnit } from "./getCurrentUnit";
import CurrencyContext from "../currencyContext/CurrencyContext";

export const displayPrice = (price: Price[], quantity = 1): string => {
  const { selectedCurrency } = useContext(CurrencyContext.Context);
  return `${
    (getCurrentPrice(price, selectedCurrency) * quantity) / 100
  } ${getCurrentUnit(selectedCurrency)}`;
};
