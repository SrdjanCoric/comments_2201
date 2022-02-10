// Action creator is just a function that returns an object (an action)

export const commentsReceived = (comments) => {
  return { type: "COMMENTS_RECEIVED", payload: { comments } };
};

export const commentAdded = (newComment) => {
  return { type: "COMMENT_CREATED", payload: { newComment } };
};
