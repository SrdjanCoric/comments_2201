import { useState, useContext } from "react";
import { addComment, CommentContext } from "../context/comment-context";

const AddCommentForm = () => {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const { dispatch } = useContext(CommentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(dispatch, { author, body }, resetInputs);
  };

  const resetInputs = () => {
    setAuthor("");
    setBody("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Post a Comment</h2>
      <div class="input-group" data-testid="input-group">
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div class="input-group">
        <label htmlFor="body">Your Comment</label>
        <textarea
          id="body"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddCommentForm;
