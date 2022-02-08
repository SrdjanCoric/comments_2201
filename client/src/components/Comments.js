import CommentThread from "./CommentThread";

const Comments = ({ comments, onMoreReplies }) => {
  return (
    <div class="comments">
      <h2>Comments (2)</h2>
      {comments.map((comment) => (
        <CommentThread
          key={comment.id}
          comment={comment}
          onMoreReplies={onMoreReplies}
        />
      ))}
    </div>
  );
};

export default Comments;
