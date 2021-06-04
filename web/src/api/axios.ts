import originalAxios from "axios";
import { EndpointType } from "./endpoints";

const API_URL = "http://localhost:3030";

export const axios = (endpoint: EndpointType, accessToken?: string) => {
  return originalAxios({
    method: endpoint.method,
    baseURL: API_URL,
    url: endpoint.url,
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : ``,
    },
  });
};
