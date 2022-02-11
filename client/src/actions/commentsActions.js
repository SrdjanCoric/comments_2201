// Action creator is just a function that returns an object (an action)
import apiClient from "../lib/ApiClient";

export const commentsReceivedSuccess = (comments) => {
  return { type: "COMMENTS_RECEIVED", payload: { comments } };
};

// once you dispatch comments received success you would set comments to the comments state and change loading to false

export const commentsReceivedRequest = () => {
  return { type: "COMMENTS_RECEIVED_REQUEST" };
};
// loading state -> false
// when we dispatch this action it would set to true (loading is true)

export const commentAddedSuccess = (newComment) => {
  return { type: "COMMENT_CREATED", payload: { newComment } };
};

export const commentsReceived = () => {
  return (dispatch) => {
    dispatch(commentsReceivedRequest()); // if you want to implement loading spinner?
    apiClient.getComments((comments) => {
      dispatch(commentsReceivedSuccess(comments));
    });
  };
};

// it checks whether what is returned from action creator is an object?
// if it is a function it calls the function with the old dispatch

export const commentAdded = (newComment, callback) => {
  return (dispatch) => {
    apiClient.addComment(newComment, (comment) => {
      dispatch(commentAddedSuccess(comment));
      if (callback) {
        callback();
      }
    });
  };
};
