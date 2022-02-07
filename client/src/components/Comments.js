import CommentThread from "./CommentThread";

const Comments = ({ comments }) => {
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
