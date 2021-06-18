import { ShipmentMethod } from "../types/ShipmentMethod";
import { Price } from "../types/Price";
import { getAvailableCurrencies } from "../mocks/getAvailableCurrencies";
import { RootState } from "./store";

export const getSum = (state: RootState): Price[] => {
  const availableCurrencies = getAvailableCurrencies();
  const elements = Array.from(
    state.cart.items.map((elem) => {
      return elem.price.map((elemPrice) => ({
        ...elemPrice,
        price: elemPrice.price * elem.quantity,
      }));
    })
  );

  const sumPrices: Price[] = [];

  availableCurrencies.forEach((avCurr) => {
    const price: Price = { currency: avCurr.currency, price: 0 };
    elements.forEach((elem) => {
      const currElements = elem.filter((el) => el.currency === price.currency);
      price.price += currElements.reduce(
        (sum: number, el: Price) => sum + el.price,
        0
      );
    });
    sumPrices.push(price);
  });

  return sumPrices;
};

export const getDelivery = (state: RootState): ShipmentMethod | null =>
  state.delivery.shipmentMethod;

export const getDiscounts = (state: RootState): Price[] => {
  const discount = state.cart.appliedDiscount?.percentage ?? 0;
  const productsTotal = getSum(state);
  return productsTotal.map((prod) => ({
    ...prod,
    price: (prod.price * discount) / 100,
  }));
};

export const getDiscountedSum = (state: RootState): Price[] => {
  const productsTotal = getSum(state);
  const discounts = getDiscounts(state);
  return productsTotal.map((prod) => ({
    ...prod,
    price:
      prod.price -
      (discounts.find((dis) => dis.currency === prod.currency)?.price || 0),
  }));
};

export const getTotal = (state: RootState): Price[] => {
  const discountedSum = getDiscountedSum(state);
  const shippingMethod = state.delivery.shipmentMethod;
  return discountedSum.map((disSum) => {
    const currShippingMethod =
      shippingMethod &&
      shippingMethod.freeFrom.find((fr) => fr.currency === disSum.currency);
    const freeThreshold = currShippingMethod
      ? currShippingMethod.price
      : Infinity;
    const currShipping =
      shippingMethod &&
      shippingMethod.price.find((fr) => fr.currency === disSum.currency);
    const shipping = currShipping ? currShipping.price : 0;

    return {
      ...disSum,
      price: disSum.price + (disSum.price < freeThreshold ? shipping : 0),
    };
  });
};
