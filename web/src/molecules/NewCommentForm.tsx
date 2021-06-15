import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  submit: (commentForm: CommentFormState) => void;
  onCancel: () => void;
};
export const NewCommentForm = ({ submit, onCancel }: Props) => {
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
      <FormInputs>
        <div>
          <label htmlFor="userName">
            <span>Twoje imię:</span>
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
            <span>Komentarz:</span>
            <textarea
              id="comment"
              value={commentForm.comment}
              onChange={commentChange}
            />
          </label>
        </div>
      </FormInputs>
      <Buttons>
        <SubmitInput type="submit" value="Dodaj nowy" />
        <CancelInput type="button" onClick={() => onCancel()} value="Anuluj" />
      </Buttons>
    </Form>
  );
};

export type CommentFormState = {
  userName: string;
  comment: string;
};

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Input = styled.input`
  font-weight: bold;
  cursor: pointer;
  margin-left: 0;
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  height: 40px;
  border: black 1px solid;
  outline: none;
`;

const SubmitInput = styled(Input)`
  background: #008000;
  &:hover {
    background: #5f6666;
  }

  &:active {
    background: #095a5a;
  }
`;

const CancelInput = styled(Input)`
  background: #ae1b1b;

  &:hover {
    background: #c43f65;
  }

  &:active {
    background: #98209d;
  }
`;

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
`;

const FormInputs = styled.div`
  border: 1px solid #000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
