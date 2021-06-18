import { Product } from "../types/Product";
import { endpoints, EndpointType } from "./endpoints";
import { axios } from "./axios";
import { Comment } from "../types/Comment";

export const API: { [key: string]: ApiTypes } = {
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
  getComments: async (prodId: string): Promise<Comment[] | undefined> => {
    const getCommentsEndpoint: EndpointType = {
      url: `${endpoints.getComments.url}/${prodId}`,
      method: endpoints.getComments.method,
    };
    const { data } = await axios(getCommentsEndpoint, {}, true);
    return (data as Comment[]) || undefined;
  },
};

type ApiTypes =
  | ((id: string) => Promise<Product | undefined>)
  | ((id: string) => Promise<Comment[] | undefined>);
