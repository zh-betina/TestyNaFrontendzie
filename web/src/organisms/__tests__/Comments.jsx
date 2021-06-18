import React from 'react';
import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event"
import {Comments} from "../Comments";

describe('<Comments/>', () => {
  it('shows a form to add a new comment when user click on button for open the form', () => {
    render(<Comments productId={"prod-id"}/>)

    expect(screen.queryByLabelText(/twoje imię/i)).toBeNull();

    const addNewCommentButton = screen.getByRole('button', {name: /dodaj nowy komentarz/i})
    user.click(addNewCommentButton);

    expect(screen.getByLabelText(/twoje imię/i));
  });

  it('hides a form to add a new comment after user click cancel button', () => {
    render(<Comments productId={"prod-id"}/>)

    const addNewCommentButton = screen.getByRole('button', {name: /dodaj nowy komentarz/i})
    user.click(addNewCommentButton);

    const cancelButton = screen.getByRole('button', {name: /anuluj/i})
    user.click(cancelButton);

    expect(screen.queryByLabelText(/twoje imię/i)).toBeNull();
  });
});