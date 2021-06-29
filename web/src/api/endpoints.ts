export const endpoints: { [key: string]: EndpointType } = {
  register: { url: "/users", method: "POST" },
  login: { url: "/authentication", method: "POST" },
  getProducts: { url: "/products", method: "GET" },
  getProduct: { url: "/products", method: "GET" },
  getComments: { url: "/comments", method: "GET" },
  addComment: { url: "/comments", method: "POST" },
  postCart: { url: "/cart", method: "POST" },
};

export type EndpointType = {
  url: string;
  method: "POST" | "GET" | "PATCH" | "DELETE";
};
