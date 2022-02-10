export const repliesReceived = (replies) => {
  return {
    type: "REPLIES_RECEIVED",
    payload: { replies },
  };
};
// action creators
