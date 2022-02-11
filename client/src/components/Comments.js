import { Component } from "react";
import CommentThread from "./CommentThread";
import { commentsReceived } from "../actions/commentsActions";
import { connect } from "react-redux";

// const Comments = () => {
//   const dispatch = useDispatch();
//   const comments = useSelector((state) => state.comments); // {comments: [], replies: []}

//   useEffect(() => {
//     const getComments = async () => {
//       dispatch(commentsReceived()); // commentsReceived will return a function
//     };
//     getComments();
//   }, [dispatch]);
//   return (
//     <div class="comments">
//       <h2>Comments (2)</h2>
//       {comments.map((comment) => (
//         <CommentThread key={comment.id} comment={comment} />
//       ))}
//     </div>
//   );
// };

// all props are in this.props

class Comments extends Component {
  componentDidMount() {
    this.props.getComments();
  }
  render() {
    return (
      <div class="comments">
        <h2>Comments (2)</h2>
        {this.props.comments.map((comment) => (
          <CommentThread key={comment.id} comment={comment} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: () => {
      dispatch(commentsReceived());
    },
  };
};

// connect function which takes 2 arguments
// - mapStateToProps
// - mapDispatchToProps

// it returns a wrappercomponent which we

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
