import originalAxios, { AxiosRequestConfig } from "axios";
import appSettings from "../appSettings";

import { EndpointType } from "./endpoints";
import { mockedAxios } from "../mocks/mockedAxios";

const API_URL = "http://localhost:3030";

export const axios = (
  endpoint: EndpointType,
  config?: AxiosRequestConfig,
  forceNotMock?: boolean
) => {
  if (!forceNotMock && appSettings.IS_MOCK) {
    return mockedAxios(endpoint);
  }

  console.log("HERE: ", endpoint.url);
  return originalAxios({
    method: endpoint.method,
    baseURL: API_URL,
    url: endpoint.url,
    ...config,
  });
};
