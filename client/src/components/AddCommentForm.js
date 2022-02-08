import { useState } from "react";

const AddCommentForm = ({ onSubmit }) => {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ author, body }, resetInputs);
  };

  const resetInputs = () => {
    setAuthor("");
    setBody("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Post a Comment</h2>
      <div class="input-group">
        <label>Your Name</label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div class="input-group">
        <label>Your Comment</label>
        <textarea
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
