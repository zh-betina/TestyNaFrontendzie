import { Product } from "../types/Product";
import { endpoints, EndpointType } from "./endpoints";
import { axios } from "./axios";

export const API: { [key: string]: () => any } = {
  getProductById: async (id: string): Promise<Product | undefined> => {
    const getProductEndpoint: EndpointType = {
      url: `${endpoints.getProduct}/${id}`,
      method: endpoints.getProduct.method,
    };
    const {
      data: { data },
    } = await axios(getProductEndpoint);
    return data ? data.find((elem: Product) => elem._id === id) : undefined;
  },
};
