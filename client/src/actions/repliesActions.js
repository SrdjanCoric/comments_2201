import apiClient from "../lib/ApiClient";

export const repliesReceivedSuccess = (replies) => {
  return {
    type: "REPLIES_RECEIVED",
    payload: { replies },
  };
};
// action creators

export const repliesReceived = (commentId, callback) => {
  return (dispatch) => {
    apiClient.getReplies(commentId, (replies) => {
      dispatch(repliesReceivedSuccess(replies));
      if (callback) {
        callback();
      }
    });
  };
};
