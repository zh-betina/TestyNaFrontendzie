import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "../templates/Container";
import { useAxiosGet } from "../hooks/useAxiosGet";
import { endpoints } from "../api/endpoints";
import { Product } from "../types/Product";
import Loader from "../atoms/Loader";

type ProductPageParams = {
  id: string;
};

export const ProductPage = (): JSX.Element => {
  const { id } = useParams<ProductPageParams>();
  const [data, loading, error] = useAxiosGet<Product>({
    url: `${endpoints.getProduct.url}/${id}`,
    method: endpoints.getProduct.method,
  });

  console.log("HERE: ", loading, data);
  if (loading || !data) return <Loader />;

  if (error) return <div>Error! ${error}</div>;

  return (
    <Container>
      <div>{data.name}</div>
      <div>{data.price}</div>
      <div>{data.brand}</div>
    </Container>
  );
};

const ProductName = styled;
