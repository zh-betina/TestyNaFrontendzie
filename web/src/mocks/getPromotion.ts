import { Promotion } from "../types/Promotion";

export const getPromotions = (): Promotion[] => [
  {
    id: "1",
    name: "Christmas promotion",
    description: {
      pl: "Świąteczna promocja 25% zniżki na wszystkie produkty!",
      en: "Christmas promotion 25% off all products!",
    },
    discount: { code: "ŚWIĄTECZNA_PROMOCJA", percentage: 25 },
    dateStart: new Date("2021-12-10"),
    dateEnd: new Date("2021-12-31"),
  },

  {
    id: "2",
    name: "Year-round promotion",
    description: {
      pl: "Zamów z kodem rabatowym -10%",
      en: "Order with discount code -10%",
    },
    discount: { code: "ALE_RABAT", percentage: 10 },
    dateStart: new Date("2021-01-01"),
    dateEnd: new Date("2021-12-31"),
  },
  {
    id: "3",
    name: "Children's Day",
    description: {
      pl: "Z okazji dnia dziecka mamy dla Ciebie kod rabatowy! Użyj kodu rabatowego i skorzystaj z -45% na wszystkie produkty!",
      en: "On the occasion of Children's Day we have a discount code for you! Use the discount code and enjoy -45% on all products!",
    },
    discount: { code: "DZIEN_DZIECKA_2021", percentage: 45 },
    dateStart: new Date("2021-06-01"),
    dateEnd: new Date("2021-06-25 24:00"),
  },
];
