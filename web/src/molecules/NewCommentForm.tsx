import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

type Props = {
  submit: (commentForm: CommentFormState) => void;
};
export const NewCommentForm = ({ submit }: Props): JSX.Element => {
  const { t } = useTranslation();
  const [commentForm, setCommentForm] = useState<CommentFormState>({
    userName: "",
    comment: "",
  });

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    submit(commentForm);
  };

  const nameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setCommentForm({ ...commentForm, userName: event.currentTarget.value });
  };

  const commentChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setCommentForm({ ...commentForm, comment: event.currentTarget.value });
  };

  const buttonText = t("Add a new one");

  return (
    <Form onSubmit={handleSubmit}>
      <FormInputs>
        <div>
          <label htmlFor="userName">
            <span>{t("Your name")}:</span>
            <input
              id="userName"
              type="text"
              value={commentForm.userName}
              onChange={nameChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="comment">
            <span>{t("Comment")}:</span>
            <textarea
              id="comment"
              value={commentForm.comment}
              onChange={commentChange}
            />
          </label>
        </div>
      </FormInputs>
      <input type="submit" value={buttonText} />
    </Form>
  );
};

export type CommentFormState = {
  userName: string;
  comment: string;
};

const Form = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & > div > div {
    width: 100%;
    padding: 5px;
  }

  & label {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  & input,
  & textarea {
    padding: 5px;
    flex-grow: 1;
    margin-left: 20px;
    margin-right: 20px;
    height: 30px;
    border: 1px solid lightslategrey;
    border-radius: 2px;

    &:focus {
      outline: 1px solid #55606d;
    }
  }

  & textarea {
    height: 150px;
    resize: none;
  }

  & input[type="submit"] {
    font-weight: bold;
    cursor: pointer;
    margin-left: 0;
    margin-top: 10px;
    width: 100%;
    padding: 10px;
    height: 40px;
    background: #008000;
    border: black 1px solid;
    outline: none;

    &:hover {
      background: #5f6666;
    }

    &:active {
      background: #095a5a;
    }
  }
`;

const FormInputs = styled.div`
  border: 1px solid #000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
