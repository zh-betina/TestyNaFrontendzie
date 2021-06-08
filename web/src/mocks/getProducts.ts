import { Product } from "../types/Product";

export const getProducts = (): Product[] => {
  return [
    {
      _id: "1",
      name: "Buty sportowe",
      brand: "Adidas",
      price: 2500,
    },
    {
      _id: "2",
      name: "Koszulka sportowa",
      brand: "Nike",
      price: 5000,
    },
    {
      _id: "3",
      name: "Buty trekingowe",
      brand: "HiTec",
      price: 8900,
    },
    {
      _id: "4",
      name: "Spodnie dresowe",
      brand: "Reebok",
      price: 8900,
    },
    {
      _id: "5",
      name: "Spodnie dresowe",
      brand: "Adidas",
      price: 6000,
    },
    {
      _id: "6",
      name: "Spodnie dresowe",
      brand: "Nike",
      price: 2500,
    },
  ];
};

export const findProductById = (id: string): Product | undefined => {
  const products = getProducts();
  return products.find((elem) => elem._id === id);
};
