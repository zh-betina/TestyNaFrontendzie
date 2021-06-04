import React from "react";
import { CommentFormState, NewCommentForm } from "../molecules/NewCommentForm";

type Props = {
  productId: string;
};
export const Comments = ({ productId }: Props) => {
  const onSubmit = (commentForm: CommentFormState) => {
    console.log("HERE: ", productId, commentForm);
  };

  return (
    <div>
      <NewCommentForm submit={onSubmit} />
    </div>
  );
};
