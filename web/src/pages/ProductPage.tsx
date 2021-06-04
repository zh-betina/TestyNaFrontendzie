import React from "react";
import { useParams } from "react-router-dom";
import Container from "../templates/Container";
import { useAxiosGet } from "../hooks/useAxiosGet";
import { endpoints } from "../api/endpoints";
import { Product } from "../types/Product";
import Loader from "../atoms/Loader";
import { Comments } from "../organisms/Comments";

type ProductPageParams = {
  id: string;
};

export const ProductPage = (): JSX.Element => {
  const { id } = useParams<ProductPageParams>();
  const [data, loading, error] = useAxiosGet<Product>({
    url: `${endpoints.getProduct.url}/${id}`,
    method: endpoints.getProduct.method,
  });

  if (loading || !data) return <Loader />;

  if (error) return <div>Error! ${error}</div>;

  return (
    <Container>
      <h1>
        {data.name} - {data.price / 100}zł
      </h1>
      <div>Marka: {data.brand}</div>
      <Comments productId={data._id} />
    </Container>
  );
};
