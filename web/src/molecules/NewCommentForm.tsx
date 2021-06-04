import React, { useState } from "react";

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

  const commentChange = (event: React.FormEvent<HTMLInputElement>) => {
    setCommentForm({ ...commentForm, comment: event.currentTarget.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userName">
        Twoje imię:
        <input
          id="userName"
          type="text"
          value={commentForm.userName}
          onChange={nameChange}
        />
      </label>
      <label>
        Komentarz:
        <input
          type="text"
          value={commentForm.comment}
          onChange={commentChange}
        />
      </label>
      <input type="submit" value="Dodaj nowy" />
    </form>
  );
};

export type CommentFormState = {
  userName: string;
  comment: string;
};
