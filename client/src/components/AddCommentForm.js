import { Component } from "react";
import axios from "axios";
import { commentAdded } from "../actions/commentsActions";
import { connect } from "react-redux";

// const AddCommentForm = () => {
//   const [author, setAuthor] = useState("");
//   const [body, setBody] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newComment = { author, body };

//     dispatch(commentAdded(newComment, resetInputs));
//     // resetInputs();
//   };

//   const resetInputs = () => {
//     setAuthor("");
//     setBody("");
//   };
//   return (
//     <form action="" onSubmit={handleSubmit}>
//       <h2>Post a Comment</h2>
//       <div class="input-group" data-testid="input-group">
//         <label htmlFor="name">Your Name</label>
//         <input
//           id="name"
//           type="text"
//           name="author"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         />
//       </div>

//       <div class="input-group">
//         <label htmlFor="body">Your Comment</label>
//         <textarea
//           id="body"
//           name="body"
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//           cols="30"
//           rows="10"
//         ></textarea>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

class AddCommentForm extends Component {
  state = {
    author: "",
    body: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { author: this.state.author, body: this.state.body };
    this.props.addComment(newComment, this.resetInputs);
    // dispatch(commentAdded(newComment, resetInputs));
    // resetInputs();
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  resetInputs = () => {
    this.setState({ author: "", body: "" });
  };
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <h2>Post a Comment</h2>
        <div class="input-group" data-testid="input-group">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleInputChange}
          />
        </div>

        <div class="input-group">
          <label htmlFor="body">Your Comment</label>
          <textarea
            id="body"
            name="body"
            value={this.state.body}
            onChange={this.handleInputChange}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (newComment, callback) => {
      dispatch(commentAdded(newComment, callback));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddCommentForm);
