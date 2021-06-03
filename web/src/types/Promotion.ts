import { Discount } from "./Discount";

export type Promotion = {
  id: string;
  name: string;
  description?: string;
  dateStart: Date;
  dateEnd: Date;
  discount: Discount;
};
