import { Price } from "./Price";

export type Product = {
  _id: string;
  name: { [key: string]: string };
  brand: string;
  price: Price[];
};
