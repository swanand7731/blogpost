import { FETCH_POSTS, FETCH_POST } from "../actions/types";
const INIT = [];

export const postsReducer = (state = INIT, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const singlePostReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
