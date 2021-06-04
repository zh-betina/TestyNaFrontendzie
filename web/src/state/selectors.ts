import checkoutMachine, {CartItem} from "./index";
import { ShipmentMethod } from "../types/ShipmentMethod";

export const getSum = (state: typeof checkoutMachine): number =>
  state.context.cart.reduce((sum: number, elem: CartItem) => sum + elem.price * elem.quantity, 0);

export const getDelivery = (
  state: typeof checkoutMachine
): ShipmentMethod | null => state.context.shipmentMethod;

export const getDiscounts = (state: typeof checkoutMachine): number => {
  const discount = state.context.appliedDiscount?.percentage ?? 0;
  const sum = state.context.cart.reduce(
    (acc: number, elem: CartItem) => acc + elem.price * elem.quantity,
    0
  );
  return (sum * discount) / 100;
};

export const getDiscountedSum = (state: typeof checkoutMachine): number => {
  const productsTotal = getSum(state);
  const discounts = getDiscounts(state);
  return productsTotal - discounts;
};

export const getTotal = (state: typeof checkoutMachine): number => {
  const discountedSum = getDiscountedSum(state);
  const shippingMethod = state.context.shipmentMethod;
  const freeThreshold = shippingMethod?.freeFrom ?? Infinity;
  const shipping = shippingMethod?.price ?? 0;
  return discountedSum + (discountedSum < freeThreshold ? shipping : 0);
};
