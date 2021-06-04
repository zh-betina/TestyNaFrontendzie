import React, { useState } from "react";
import { AxiosResponse } from "axios";
import { ProductElement } from "../molecules/ProductElement";
import Loader from "../atoms/Loader";
import { Product } from "../types/Product";
import { axios } from "../api/axios";
import { endpoints } from "../api/endpoints";

export const Products = (): JSX.Element => {
  const [products, setProducts] = useState<Product[] | null>(null);

  if (!products) {
    axios(endpoints.getProducts).then((res: AxiosResponse<any>) => {
      const { data } = res;
      if (data) {
        setProducts(data.data);
      }
    });
  }

  if (!products) return <Loader />;

  return (
    <div>
      {products.map((prod) => {
        return <ProductElement key={prod._id} product={prod} />;
      })}
    </div>
  );
};
