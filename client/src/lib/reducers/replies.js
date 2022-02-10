const replies = (state = [], action) => {
  switch (action.type) {
    case "COMMENTS_RECEIVED": {
      // payload: {comments: data}
      const replies = action.payload.comments.reduce((acc, comment) => {
        const { replies } = comment;
        return acc.concat(replies);
      }, []);
      return replies;
    }
    case "REPLIES_RECEIVED": {
      return state.concat(action.payload.replies);
    }
    default: {
      return state;
    }
  }
};

export default replies;
