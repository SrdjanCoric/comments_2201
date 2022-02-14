import { useReducer, createContext } from "react";
import apiClient from "../lib/ApiClient";

const CommentContext = createContext();

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case "COMMENTS_RECEIVED": {
      return action.payload.comments;
    }
    case "REPLIES_RECEIVED": {
      return state.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return Object.assign({}, comment, {
            replies: comment.replies.concat(action.payload.replies),
          });
        } else {
          return comment;
        }
      });
    }
    case "COMMENT_ADDED": {
      return state.concat(action.payload.newComment);
    }
    default: {
      return state;
    }
  }
};

const getComments = async (dispatch) => {
  const comments = await apiClient.getComments();
  dispatch({ type: "COMMENTS_RECEIVED", payload: { comments } });
};

const getReplies = async (dispatch, commentId) => {
  const replies = await apiClient.getReplies(commentId);
  dispatch({ type: "REPLIES_RECEIVED", payload: { replies, commentId } });
};

const addComment = async (dispatch, comment, callback) => {
  const newComment = await apiClient.addComment(comment);
  dispatch({ type: "COMMENT_ADDED", payload: { newComment } });
  if (callback) callback();
};

const CommentProvider = ({ children }) => {
  const [comments, dispatch] = useReducer(commentsReducer, []);

  return (
    <CommentContext.Provider value={{ comments, dispatch }}>
      {children}
    </CommentContext.Provider>
  );
};

export { CommentContext, CommentProvider, getComments, getReplies, addComment };
