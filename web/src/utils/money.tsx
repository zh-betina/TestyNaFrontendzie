import { Price } from "../types/Price";
import { getCurrentPrice } from "./getCurrentPrice";
import { getCurrentUnit } from "./getCurrentUnit";
import { useCurrency } from "../currencyContext/CurrencyContext";

export const displayPrice = (price: Price[], quantity = 1): string => {
  const {
    state: { selectedCurrency },
  } = useCurrency();
  return `${
    (getCurrentPrice(price, selectedCurrency) * quantity) / 100
  } ${getCurrentUnit(selectedCurrency)}`;
};
