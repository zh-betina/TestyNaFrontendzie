import React from "react";
// eslint-disable-next-line import/no-unresolved
import { render, screen } from "test-utils";
import { CommentsWrapper } from "../Comments";

describe("<CommentsWrapper/>", () => {
  it("renders information about no comments yet when these do not exist", () => {
    const prodId = "1";
    const { debug } = render(<CommentsWrapper productId={prodId} />);
    debug();
  });
});
