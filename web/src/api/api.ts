import { Product } from "../types/Product";
import { endpoints, EndpointType } from "./endpoints";
import { axios } from "./axios";
import { Comment } from "../types/Comment";
import { CommentFormState } from "../molecules/NewCommentForm";

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
  const { data } = await axios(getCommentsEndpoint, {}, true);
  return (data.data as Comment[]) || undefined;
};

const addComment = async (
  prodId: string,
  comment: CommentFormState,
  date: string
): Promise<string> => {
  const { data } = await axios(endpoints.addComment, {
    data: {
      productId: prodId,
      owner: comment.userName,
      comment: comment.comment,
      date,
    },
  });

  console.log("HERE: ", data);

  return data._id;
};

export { getComments, getProductById, addComment, getProducts };
