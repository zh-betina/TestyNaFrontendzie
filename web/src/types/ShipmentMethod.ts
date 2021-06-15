import { Price } from "./Price";
import { Currency } from "./Currency";

export interface ShipmentMethod {
  type: string;
  price: Price[];
  name: { [key: string]: string };
  freeFrom: Price[];
}

export const shipmentMethods: ShipmentMethod[] = [
  {
    type: "expressDelivery",
    name: {
      pl: "Dostawa ekspresowa (1-2 dni)",
      en: "Express delivery (1-2 days)",
    },
    price: [
      {
        currency: Currency.PLN,
        price: 2500,
      },
      {
        currency: Currency.USD,
        price: 669,
      },
      {
        currency: Currency.EUR,
        price: 552,
      },
    ],
    freeFrom: [
      {
        currency: Currency.PLN,
        price: Infinity,
      },
      {
        currency: Currency.USD,
        price: Infinity,
      },
      {
        currency: Currency.EUR,
        price: Infinity,
      },
    ],
  },
  {
    type: "standardDelivery",
    name: {
      pl: "Dostawa standardowa (3-4 dni)",
      en: "Standard delivery (3-4 days)",
    },
    price: [
      {
        currency: Currency.PLN,
        price: 1000,
      },
      {
        currency: Currency.USD,
        price: 268,
      },
      {
        currency: Currency.EUR,
        price: 221,
      },
    ],
    freeFrom: [
      {
        currency: Currency.PLN,
        price: 20000,
      },
      {
        currency: Currency.USD,
        price: 5500,
      },
      {
        currency: Currency.EUR,
        price: 4500,
      },
    ],
  },
];
