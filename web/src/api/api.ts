import { Product } from "../types/Product";
import { endpoints, EndpointType } from "./endpoints";
import { axios } from "./axios";
import { Comment } from "../types/Comment";

const getProductById = async (id: string): Promise<Product | undefined> => {
  const getProductEndpoint: EndpointType = {
    url: `${endpoints.getProduct}/${id}`,
    method: endpoints.getProduct.method,
  };

  const {
    data: { data },
  } = await axios(getProductEndpoint);
  return data ? data.find((elem: Product) => elem._id === id) : undefined;
};
const getComments = async (prodId: string): Promise<Comment[] | undefined> => {
  const getCommentsEndpoint: EndpointType = {
    url: `${endpoints.getComments.url}/${prodId}`,
    method: endpoints.getComments.method,
  };
  const { data } = await axios(getCommentsEndpoint, {}, true);
  return (data as Comment[]) || undefined;
};

export { getComments, getProductById };
