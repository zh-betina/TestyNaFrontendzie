import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Comments } from "../Comments";

describe("<Comments/>", () => {
  it("shows a form to add a new comment when user click on button for open the form", () => {
    render(<Comments productId="prod-id-1" />);
    const yourNameLabelText = /twoje imię/i;

    expect(screen.queryByLabelText(yourNameLabelText)).toBeNull();

    const openAddNewCommentFormButton =
      screen.getByText(/dodaj nowy komentarz/i);
    user.click(openAddNewCommentFormButton);

    expect(screen.getByLabelText(yourNameLabelText)).toBeDefined();
  });

  it("hides a form to add a new comment after user click after cancel button", () => {
    render(<Comments productId="prod-id-1" />);
    const yourNameLabelText = /twoje imię/i;
    user.click(screen.getByText(/dodaj nowy komentarz/i));

    const cancelButton = screen.getByText(/anuluj/i);
    user.click(cancelButton);

    expect(screen.queryByLabelText(yourNameLabelText)).toBeNull();
  });
});
