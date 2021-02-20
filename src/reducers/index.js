import { combineReducers } from "redux";
import { postsReducer, singlePostReducer } from "./postsReducer";
import { usersReducer, singleUserReducer } from "./usersReducer";
import { commentsReducer } from "./commentsReducer";

export default combineReducers({
  posts: postsReducer,
  post: singlePostReducer,
  users: usersReducer,
  user: singleUserReducer,
  comments: commentsReducer,
});
