import React from "react";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { I18nextProvider } from "react-i18next";
import { NewCommentForm } from "../NewCommentForm";
import i18n from "../../i18nForTests";

describe("<NewCommentForm />", () => {
  it("should make ability for user to add a new comment", () => {
    const onSubmitMock = jest.fn();
    render(
      <I18nextProvider i18n={i18n}>
        <NewCommentForm submit={onSubmitMock} />
      </I18nextProvider>
    );
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
