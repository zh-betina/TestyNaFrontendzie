import { Product } from "../types/Product";

export const getProducts = (): Product[] => {
  return [
    {
      _id: "1",
      name: {
        pl: "Buty sportowe",
        en: "Sports shoes",
      },
      brand: "Adidas",
      price: 2500,
    },
    {
      _id: "2",
      name: {
        pl: "Koszulka sportowa",
        en: "Sports T-shirt'",
      },
      brand: "Nike",
      price: 5000,
    },
    {
      _id: "3",
      name: {
        pl: "Buty trekingowe",
        en: "Trekking boots",
      },
      brand: "HiTec",
      price: 8900,
    },
    {
      _id: "4",
      name: {
        pl: "Spodnie dresowe",
        en: "Sweatpants",
      },
      brand: "Reebok",
      price: 8900,
    },
    {
      _id: "5",
      name: {
        pl: "Spodnie dresowe",
        en: "Sweatpants",
      },
      brand: "Adidas",
      price: 6000,
    },
    {
      _id: "6",
      name: {
        pl: "Spodnie dresowe",
        en: "Sweatpants",
      },
      brand: "Nike",
      price: 2500,
    },
  ];
};

export const findProductById = (id: string): Product | undefined => {
  const products = getProducts();
  return products.find((elem) => elem._id === id);
};
