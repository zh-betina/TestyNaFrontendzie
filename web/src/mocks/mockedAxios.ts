import { EndpointType } from "../api/endpoints";
import { findProductById, getProducts } from "./getProducts";

export const mockedAxios = async (
  endpoint: EndpointType
): Promise<MockedResult> => {
  let result: MockedResult | undefined;
  if (endpoint.url.includes("/products/")) {
    const id = endpoint.url.split("/")[2];
    result = { data: findProductById(id) };
  }

  if (!result) {
    switch (endpoint.url) {
      case "/products":
        result = { data: { data: getProducts() } };
        break;
      default:
        result = { data: null };
        break;
    }
  }

  return new Promise((resolve, reject) => {
    if (result) resolve(result);
    reject();
  });
};

type MockedResult = {
  data: any;
};
