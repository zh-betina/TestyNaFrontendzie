import React, { useContext } from "react";
import { useService } from "@xstate/react";
import { ProductElement } from "../molecules/ProductElement";
import Loader from "../atoms/Loader";
import { Product } from "../types/Product";
import { endpoints } from "../api/endpoints";
import { useAxiosGet } from "../hooks/useAxiosGet";
import { MachineContext } from "../MachineContext";

export const Products = (): JSX.Element => {
  const [data, loading, error] = useAxiosGet<{ data: Product[] }>(
    endpoints.getProducts
  );
  const products = data?.data;
  const machine = useContext(MachineContext);
  const [current, send] = useService(machine);
  const { cart } = current.context;
  if (loading || !data || !products) return <Loader />;

  if (error) return <div>Error! ${error}</div>;

  const addToCart = (productId: string) => {
    send("ADD_PRODUCT", { productId });
  };

  const removeFromCart = (productId: string) => {
    send("REMOVE_PRODUCT", { productId });
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
