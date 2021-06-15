import { Currency } from "../types/Currency";

export const getAvailableCurrencies = (): AvailableCurrency[] => {
  return [
    { unit: "zł", currency: Currency.PLN, name: "PLN - złoty" },
    { unit: "$", currency: Currency.USD, name: "United States Dollar" },
    { unit: "€", currency: Currency.EUR, name: "Euros" },
  ];
};

type AvailableCurrency = {
  unit: string;
  currency: Currency;
  name: string;
};
