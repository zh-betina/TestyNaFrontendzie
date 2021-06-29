import { Product } from "../types/Product";
import { endpoints, EndpointType } from "./endpoints";
import { axios } from "./axios";
import { Comment } from "../types/Comment";
import { CommentFormState } from "../molecules/NewCommentForm";
import { Address } from "../types/Address";
import { Currency } from "../types/Currency";

const getProductById = async (id: string): Promise<Product> => {
  const getProductEndpoint: EndpointType = {
    url: `${endpoints.getProduct.url}/${id}`,
    method: endpoints.getProduct.method,
  };

  const { data } = await axios<Product>(getProductEndpoint);
  return data;
};

const getProducts = async (): Promise<Product[]> => {
  const getProductsEndpoint: EndpointType = endpoints.getProducts;

  const {
    data: { data },
  } = await axios(getProductsEndpoint);
  return data;
};

const getComments = async (prodId: string): Promise<Comment[] | undefined> => {
  const getCommentsEndpoint: EndpointType = {
    url: `${endpoints.getComments.url}/?productId=${prodId}`,
    method: endpoints.getComments.method,
  };
  const { data } = await axios<{ data: Comment[] }>(getCommentsEndpoint);
  return data.data || undefined;
};

const addComment = async (
  prodId: string,
  comment: CommentFormState,
  date: string,
): Promise<string> => {
  const { data } = await axios<{ _id: string }>(endpoints.addComment, {
    data: {
      productId: prodId,
      owner: comment.userName,
      comment: comment.comment,
      date,
    },
  });

  return data._id;
};

const payForCart = async (body: {
  products: string[];
  address: Address | null;
  currency: Currency;
}): Promise<string> => {
  const { data } = await axios<{ clientSecret: string }>(endpoints.postCart, {
    data: body,
  });

  return data.clientSecret;
};

export { getComments, getProductById, addComment, getProducts, payForCart };
