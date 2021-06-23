import React from "react";
import user from "@testing-library/user-event";
// eslint-disable-next-line import/no-unresolved
import { render, screen } from "test-utils";
import { NewCommentForm } from "../NewCommentForm";

describe("<NewCommentForm />", () => {
  it("should make ability for user to add a new comment", () => {
    const onSubmitMock = jest.fn();
    render(<NewCommentForm submit={onSubmitMock} />);
    const userName = "Piotr";
    const comment = "Te buty były super, polecam!";

    const yourNameInput = screen.getByLabelText(/your name/i);
    const commentTextarea = screen.getByLabelText(/comment/i);

    user.type(yourNameInput, userName);
    user.type(commentTextarea, comment);

    const submitButton = screen.getByRole("button", {
      name: /add a new one/i,
    });

    user.click(submitButton);

    expect(onSubmitMock).toBeCalled();
    expect(onSubmitMock).toBeCalledTimes(1);
    expect(onSubmitMock).toBeCalledWith({
      userName,
      comment,
    });
  });
});
