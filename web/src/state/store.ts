import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cartReducer from "./cart";
import deliveryReducer from "./delivery";
import productsReducer from "./products";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    delivery: deliveryReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
