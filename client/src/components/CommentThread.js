import { useContext } from "react";
import { CommentContext, getReplies } from "../context/comment-context";
import Comment from "./Comment";

const CommentThread = ({ comment }) => {
  const { dispatch } = useContext(CommentContext);
  const handleMoreReplies = (e) => {
    e.preventDefault();
    getReplies(dispatch, comment.id);
  };
  return (
    <div className="parent-comment">
      <Comment {...comment} />
      <div className="replies">
        {comment.replies.map((reply) => {
          return <Comment key={reply.id} {...reply} />;
        })}
        {comment.replies_count === comment.replies.length ? null : (
          <a href="/#" className="show_more" onClick={handleMoreReplies}>
            Show More Replies ({comment.replies_count - 1})
          </a>
        )}
      </div>
    </div>
  );
};

export default CommentThread;
