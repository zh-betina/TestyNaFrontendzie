import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { getProducts } from "../api/api";
import { Product } from "../types/Product";

interface ProductsState {
  products: Product[] | null;
  loading: boolean;
  error: string | boolean;
}

const initialState: ProductsState = {
  products: null,
  loading: false,
  error: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStarted(state) {
      state.loading = true;
    },
    fetchProductsSuccess(state, action) {
      state.products = action.payload.products;
      state.loading = false;
    },
    fetchProductsFailed(state, action) {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchProductsStarted,
  fetchProductsSuccess,
  fetchProductsFailed,
} = productsSlice.actions;

export default productsSlice.reducer;

export const fetchProducts = () => async (dispatch: Dispatch) => {
  dispatch(fetchProductsStarted());
  try {
    const products = await getProducts();
    dispatch(fetchProductsSuccess({ products }));
  } catch (err) {
    dispatch(fetchProductsFailed({ error: err.toString() }));
  }
};
