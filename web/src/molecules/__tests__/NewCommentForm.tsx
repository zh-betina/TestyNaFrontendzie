import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import React from "react";
import { NewCommentForm } from "../NewCommentForm";

describe("<NewCommentForm />", () => {
  it("", () => {
    const userName = "Piotr Programista";
    const comment = "Te buty są idealne!";

    const onSubmitMock = jest.fn();
    render(<NewCommentForm submit={onSubmitMock} />);

    const yourNameInput = screen.getByLabelText(/twoje imię/i);
    const commentInput = screen.getByLabelText(/komentarz/i);

    user.type(yourNameInput, userName);
    user.type(commentInput, comment);

    const submitButton = screen.getByRole("button", {
      name: /dodaj nowy/i,
    });

    user.click(submitButton);

    expect(onSubmitMock).toBeCalledTimes(1);
    expect(onSubmitMock).toBeCalledWith({
      userName,
      comment,
    });
  });
});
