import axios from "axios";

const apiClient = {
  getComments: (callback) => {
    return axios
      .get("/api/comments")
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  getReplies: (commentId, callback) => {
    return axios
      .get(`/api/comment_replies?comment_id=${commentId}`)
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  addComment: (newComment, callback) => {
    return axios
      .post("/api/comments", { ...newComment })
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
};

export default apiClient;
