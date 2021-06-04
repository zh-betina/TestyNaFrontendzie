import React, { useState } from "react";
import { AxiosResponse } from "axios";
import { ProductElement } from "../molecules/ProductElement";
import Loader from "../atoms/Loader";
import { Product } from "../types/Product";
import { endpoints } from "../api/endpoints";
import { useAxiosGet } from "../hooks/useAxiosGet";

export const Products = (): JSX.Element => {
  const [data, loading, error] = useAxiosGet<{ data: Product[] }>(
    endpoints.getProducts
  );
  const products = data?.data;
  if (true || loading || !data || !products) return <Loader />;

  if (error) return <div>Error! ${error}</div>;

  return (
    <div>
      {products.map((prod: Product) => {
        return <ProductElement key={prod._id} product={prod} />;
      })}
    </div>
  );
};
