import originalAxios, { AxiosRequestConfig } from "axios";

import { EndpointType } from "./endpoints";

export const API_URL = "http://localhost:3030";

export const axios = <T>(
  endpoint: EndpointType,
  config?: AxiosRequestConfig,
) => {
  return originalAxios.request<T>({
    method: endpoint.method,
    baseURL: API_URL,
    url: endpoint.url,
    ...config,
  });
};
