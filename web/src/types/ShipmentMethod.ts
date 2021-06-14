export interface ShipmentMethod {
  type: string;
  price: number;
  name: { [key: string]: string };
  freeFrom: number;
}

export const shipmentMethods: ShipmentMethod[] = [
  {
    type: "expressDelivery",
    name: {
      pl: "Dostawa ekspresowa (1-2 dni)",
      en: "Express delivery (1-2 days)",
    },
    price: 2500,
    freeFrom: Infinity,
  },
  {
    type: "standardDelivery",
    name: {
      pl: "Dostawa standardowa (3-4 dni)",
      en: "Standard delivery (3-4 days)",
    },
    price: 1000,
    freeFrom: 20000,
  },
];
