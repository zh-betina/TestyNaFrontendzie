import React, { useEffect } from "react";
import { ProductElement } from "../molecules/ProductElement";
import Loader from "../atoms/Loader";
import { Product } from "../types/Product";
import { useAppDispatch, useAppSelector } from "../state/store";
import { addProduct, removeProduct } from "../state/cart";
import { fetchProducts } from "../state/products";

export const Products = (): JSX.Element => {
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading || !products) return <Loader />;

  if (error) return <div>Error! ${error}</div>;

  const addToCart = (productId: string) => {
    dispatch(addProduct({ productId }));
  };

  const removeFromCart = (productId: string) => {
    dispatch(removeProduct({ productId }));
  };

  console.log("HERE: ", products);
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
