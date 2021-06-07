import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  submit: (commentForm: CommentFormState) => void;
};
export const NewCommentForm = ({ submit }: Props) => {
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

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="userName">
        Twoje imię:
        <input
          id="userName"
          type="text"
          value={commentForm.userName}
          onChange={nameChange}
        />
      </label>
      <label htmlFor="comment">
        Komentarz:
        <textarea
          id="comment"
          value={commentForm.comment}
          onChange={commentChange}
        />
      </label>
      <input type="submit" value="Dodaj nowy" />
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

  & > label {
    padding: 10px;

    & > input,
    & > textarea {
      margin-left: 20px;
      width: 300px;
      height: 30px;
      border: orange 2px solid;
      border-radius: 10px;

      &:hover {
        border: #8d5d01 2px solid;
      }
    }

    & > textarea {
      height: 150px;
      resize: none;
    }
  }

  & > input[type="submit"] {
    padding: 10px;
    height: 40px;
    background: aqua;
    border: black 1px solid;
    border-radius: 10px;
    outline: none;

    &:hover {
      background: #56cdcd;
    }

    &:active {
      background: #095a5a;
    }
  }
`;
