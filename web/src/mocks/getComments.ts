const comments = [
  {
    id: "1",
    productId: "1",
    owner: "Piotr",
    comment: "Te buty są mega super!",
    date: "2021-02-10 10:30",
  },
];

export const getCommentsForProduct = (id: string) => {
  return comments.filter((comment) => comment.productId === id);
};
