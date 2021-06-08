import originalAxios, { AxiosRequestConfig } from "axios";
import appSettings from "../appSettings";

import { EndpointType } from "./endpoints";
import { mockedAxios } from "../mocks/mockedAxios";

const API_URL = "http://localhost:3030";

export const axios = (endpoint: EndpointType, config?: AxiosRequestConfig) => {
  if (appSettings.IS_MOCK) {
    return mockedAxios(endpoint);
  }

  return originalAxios({
    method: endpoint.method,
    baseURL: API_URL,
    url: endpoint.url,
    ...config,
  });
};
