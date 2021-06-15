import { Product } from "../types/Product";
import { Currency } from "../types/Currency";

export const getProducts = (): Product[] => {
  return [
    {
      _id: "1",
      name: "Buty sportowe",
      brand: "Adidas",
      price: [
        {
          currency: Currency.PLN,
          price: 25000,
        },
        {
          currency: Currency.USD,
          price: 6688,
        },
        {
          currency: Currency.EUR,
          price: 5517,
        },
      ],
    },
    {
      _id: "2",
      name: "Koszulka sportowa",
      brand: "Nike",
      price: [
        {
          currency: Currency.PLN,
          price: 5000,
        },
        {
          currency: Currency.USD,
          price: 1338,
        },
        {
          currency: Currency.EUR,
          price: 1104,
        },
      ],
    },
    {
      _id: "3",
      name: "Buty trekingowe",
      brand: "HiTec",
      price: [
        {
          currency: Currency.PLN,
          price: 8900,
        },
        {
          currency: Currency.USD,
          price: 2381,
        },
        {
          currency: Currency.EUR,
          price: 1964,
        },
      ],
    },
    {
      _id: "4",
      name: "Spodnie dresowe",
      brand: "Reebok",
      price: [
        {
          currency: Currency.PLN,
          price: 8900,
        },
        {
          currency: Currency.USD,
          price: 2381,
        },
        {
          currency: Currency.EUR,
          price: 1964,
        },
      ],
    },
    {
      _id: "5",
      name: "Spodnie dresowe",
      brand: "Adidas",
      price: [
        {
          currency: Currency.PLN,
          price: 6000,
        },
        {
          currency: Currency.USD,
          price: 1605,
        },
        {
          currency: Currency.EUR,
          price: 1324,
        },
      ],
    },
    {
      _id: "6",
      name: "Spodnie dresowe",
      brand: "Nike",
      price: [
        {
          currency: Currency.PLN,
          price: 25000,
        },
        {
          currency: Currency.USD,
          price: 6688,
        },
        {
          currency: Currency.EUR,
          price: 5517,
        },
      ],
    },
  ];
};

export const findProductById = (id: string): Product | undefined => {
  const products = getProducts();
  return products.find((elem) => elem._id === id);
};
