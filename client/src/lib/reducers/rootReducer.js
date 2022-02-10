import { combineReducers } from "redux";
import comments from "./comments";
import replies from "./replies";

// const rootReducer = (state = {}, action) => {
//   return {
//     comments: comments(state.comments, action),
//     replies: replies(state.replies, action),
//   };
// };

const rootReducer = combineReducers({ comments, replies });

// combineReducers

export default rootReducer;

//comments [{replies: []}]

//user
// blog posts
// comments
// replies

// user -> [] without blog posts
// blogPosts -> [] without comments
// comments -> [] without replies
// replies

// comments -> [] without replies
