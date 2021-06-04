import originalAxios, { AxiosRequestConfig } from "axios";

import { EndpointType } from "./endpoints";

const API_URL = "http://localhost:3030";

export const axios = (endpoint: EndpointType, config?: AxiosRequestConfig) => {
  console.log("HERE: ", endpoint);
  return originalAxios({
    method: endpoint.method,
    baseURL: API_URL,
    url: endpoint.url,
    ...config,
  });
};
