import axios from "axios";

const apiClient = {
  getComments: async () => {
    const response = await axios.get("/api/comments");
    return response.data;
  },
  addComment: async (comment) => {
    const response = await axios.post("/api/comments", { ...comment });
    return response.data;
  },
  getReplies: async (commentId) => {
    const response = await axios.get(
      `/api/comment_replies?comment_id=${commentId}`
    );
    return response.data;
  },
};

export default apiClient;
