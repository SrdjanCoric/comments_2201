import { useContext, useEffect } from "react";
import { CommentContext } from "../context/comment-context";
import { getComments } from "../context/comment-context";
import CommentThread from "./CommentThread";

const Comments = () => {
  const { comments, dispatch } = useContext(CommentContext);

  useEffect(() => {
    getComments(dispatch);
  }, [dispatch]);

  return (
    <div class="comments">
      <h2>Comments (2)</h2>
      {comments.map((comment) => (
        <CommentThread key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
