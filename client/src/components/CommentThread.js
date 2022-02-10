import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { repliesReceived } from "../actions/repliesActions";
import Comment from "./Comment";

const CommentThread = ({ comment }) => {
  const dispatch = useDispatch();
  let replies = useSelector((state) => state.replies).filter(
    (r) => r.comment_id === comment.id
  );

  const handleMoreReplies = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `/api/comment_replies?comment_id=${comment.id}`
    );
    const data = response.data;
    dispatch(repliesReceived(data));
  };

  return (
    <div className="parent-comment">
      <Comment {...comment} />
      <div className="replies">
        {replies.map((reply) => {
          return <Comment key={reply.id} {...reply} />;
        })}
        {comment.replies_count === replies.length ? null : (
          <a href="/#" className="show_more" onClick={handleMoreReplies}>
            Show More Replies ({comment.replies_count - 1})
          </a>
        )}
      </div>
    </div>
  );
};

export default CommentThread;
