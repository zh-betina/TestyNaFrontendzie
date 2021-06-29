import { Currency } from './Cart';

export type Product = {
  _id?: string;
  name: string;
  brand: string;
  price: Price[];
};

export type Price = {
  currency: Currency;
  price: number;
};
