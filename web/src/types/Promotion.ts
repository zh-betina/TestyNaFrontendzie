import { Discount } from "./Discount";

export type Promotion = {
  id: string;
  name: string;
  description?: { [key: string]: string };
  dateStart: Date;
  dateEnd: Date;
  discount: Discount;
};
