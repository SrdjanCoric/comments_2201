import { useEffect, useState } from "react";
import axios from "axios";
import AddCommentForm from "./components/AddCommentForm";
import Comments from "./components/Comments";

const App = () => {
  // const handleMoreReplies = async (id) => {
  //   const response = await axios.get(`/api/comment_replies?comment_id=${id}`);
  //   const data = response.data;
  //   setComments(
  //     comments.map((comment) => {
  //       if (comment.id === id) {
  //         return Object.assign({}, comment, {
  //           replies: comment.replies.concat(data),
  //         });
  //       } else {
  //         return comment;
  //       }
  //     })
  //   );
  // };

  // useEffect(() => {
  //   const getComments = async () => {
  //     const response = await axios.get("/api/comments");
  //     const data = response.data;
  //     setComments(data);
  //   };
  //   getComments();
  // }, []);

  // const handleSubmit = async (newComment, callback) => {
  //   const response = await axios.post("/api/comments", { ...newComment });
  //   const data = response.data;
  //   setComments(comments.concat(data));
  //   if (callback) {
  //     callback();
  //   }
  // };

  return (
    <div>
      <Comments />
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
