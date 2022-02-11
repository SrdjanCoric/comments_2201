import axios from "axios";
import { connect } from "react-redux";
import { repliesReceived } from "../actions/repliesActions";
import Comment from "./Comment";

// const CommentThread = ({ comment }) => {
//   const dispatch = useDispatch();
//   let replies = useSelector((state) => state.replies).filter(
//     (r) => r.comment_id === comment.id
//   );

//   const handleMoreReplies = async (e) => {
//     e.preventDefault();
//     dispatch(repliesReceived(comment.id));
//   };

//   return (
//     <div className="parent-comment">
//       <Comment {...comment} />
//       <div className="replies">
//         {replies.map((reply) => {
//           return <Comment key={reply.id} {...reply} />;
//         })}
//         {comment.replies_count === replies.length ? null : (
//           <a href="/#" className="show_more" onClick={handleMoreReplies}>
//             Show More Replies ({comment.replies_count - 1})
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

const CommentThread = ({ replies, getReplies, comment }) => {
  const handleMoreReplies = async (e) => {
    e.preventDefault();
    getReplies();
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

const mapStateToProps = (state, ownProps) => {
  return {
    replies: state.replies.filter((r) => r.comment_id === ownProps.comment.id),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getReplies: () => {
      dispatch(repliesReceived(ownProps.comment.id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentThread);
