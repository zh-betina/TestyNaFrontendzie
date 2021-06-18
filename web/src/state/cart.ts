import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findProductById } from "../mocks/getProducts";
import { availableDiscounts, Discount } from "../types/Discount";
import { Price } from "../types/Price";

interface CartItem {
  id: string;
  name: { [key: string]: string };
  brand: string;
  price: Price[];
  quantity: number;
}

interface CartState {
  items: CartItem[];
  appliedDiscount: Discount | null;
}

const initialState: CartState = {
  items: [],
  appliedDiscount: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<{ productId: string }>) => {
      const productIdToAdd = action.payload.productId;
      const productAlreadyInCart = !!state.items.find(
        (product) => product.id === productIdToAdd
      );

      if (productAlreadyInCart) {
        const items = state.items.map((product) => {
          if (product.id === productIdToAdd) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
        return { ...state, items };
      }
      const prodToAdd = findProductById(action.payload.productId);

      if (!prodToAdd) {
        return state;
      }

      const newCartItem: CartItem = {
        id: prodToAdd._id,
        quantity: 1,
        name: prodToAdd.name,
        brand: prodToAdd.brand,
        price: prodToAdd.price,
      };

      const items = [newCartItem, ...state.items];
      return { ...state, items };
    },
    removeProduct: (state, action: PayloadAction<{ productId: string }>) => {
      const productIdToRemove = action.payload.productId;

      const items = state.items
        .map((product) =>
          product.id === productIdToRemove
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity !== 0);
      return { ...state, items };
    },
    addDiscount: (state, action: PayloadAction<{ code: string }>) => {
      const appliedDiscount =
        availableDiscounts.find(
          (discount) => discount.code === action.payload.code
        ) ?? null;
      return { ...state, appliedDiscount };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, addDiscount } = cartSlice.actions;

export default cartSlice.reducer;
