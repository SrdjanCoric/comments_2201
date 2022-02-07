import { useEffect, useState } from "react";
import AddCommentForm from "./components/AddCommentForm";
import Comments from "./components/Comments";
import data from "./lib/comments";

const App = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(data);
  }, []);
  return (
    <div>
      <Comments comments={comments} />
      <AddCommentForm />
    </div>
  );
};

export default App;

// Comments
// Comment Thread
// Comment
// Replies (Comment)
// Add Comment Form
