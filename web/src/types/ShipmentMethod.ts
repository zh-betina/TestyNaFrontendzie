import { Price } from "./Price";
import { Currency } from "./Currency";

export interface ShipmentMethod {
  type: string;
  price: Price[];
  name: string;
  freeFrom: Price[];
}

export const shipmentMethods: ShipmentMethod[] = [
  {
    type: "expressDelivery",
    name: "Dostawa ekspresowa (1-2 dni)",
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
    name: "Dostawa standardowa (3-4 dni)",
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
