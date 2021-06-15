import { getAvailableCurrencies } from "../mocks/getAvailableCurrencies";
import { Currency } from "../types/Currency";

export const getCurrentUnit = (currentCurrency: Currency): string => {
  const availableCurrencies = getAvailableCurrencies();

  return (
    availableCurrencies.find((avCurr) => avCurr.currency === currentCurrency)
      ?.unit || "zł"
  );
};
