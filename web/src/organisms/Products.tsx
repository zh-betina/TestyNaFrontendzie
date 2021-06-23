import React from "react";
import { ProductElement } from "../molecules/ProductElement";
import Loader from "../atoms/Loader";
import { Product } from "../types/Product";
import { endpoints } from "../api/endpoints";
import { useAxiosGet } from "../hooks/useAxiosGet";
import { useAppDispatch, useAppSelector } from "../state/store";
import { addProduct, removeProduct } from "../state/cart";

export const Products = (): JSX.Element => {
  const [data, loading, error] = useAxiosGet<{ data: Product[] }>(
    endpoints.getProducts
  );
  const products = data?.data;
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);
  if (loading || !data || !products) return <Loader />;

  if (error) return <div>Error! ${error}</div>;

  const addToCart = (productId: string) => {
    dispatch(addProduct({ productId }));
  };

  const removeFromCart = (productId: string) => {
    dispatch(removeProduct({ productId }));
  };

  return (
    <div>
      {products.map((prod: Product) => {
        return (
          <ProductElement
            key={prod._id}
            product={prod}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        );
      })}
    </div>
  );
};
