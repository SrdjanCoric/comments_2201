import { useEffect } from "react";
import axios from "axios";
import CommentThread from "./CommentThread";
import { commentsReceived } from "../actions/commentsActions";
import { useDispatch, useSelector } from "react-redux";

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments); // {comments: [], replies: []}

  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get("/api/comments");
      const data = response.data;
      dispatch(commentsReceived(data));
    };
    getComments();
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
