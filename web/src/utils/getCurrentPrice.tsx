import { Price } from "../types/Price";
import { Currency } from "../types/Currency";

export const getCurrentPrice = (
  price: Price[],
  currentCurrency: Currency = Currency.PLN
): number => {
  return price.find((pr) => pr.currency === currentCurrency)?.price || 0;
};
