import React from "react";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { NewCommentForm } from "../NewCommentForm";

describe("<NewCommentForm />", () => {
  it("should make ability for user to add a new comment", () => {
    const onSubmitMock = jest.fn();
    render(<NewCommentForm submit={onSubmitMock} />);
    const userName = "Piotr";
    const comment = "Te buty były super, polecam!";

    const yourNameInput = screen.getByLabelText(/twoje imię/i);
    const commentTextarea = screen.getByLabelText(/komentarz/i);

    user.type(yourNameInput, userName);
    user.type(commentTextarea, comment);

    const submitButton = screen.getByRole("button", {
      name: /dodaj nowy/i,
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
