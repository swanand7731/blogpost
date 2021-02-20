import { FETCH_COMMENTS, REMOVE_COMMENTS } from "../actions/types";

const INIT = [];

export const commentsReducer = (state = INIT, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return [...state, ...action.payload];
    case REMOVE_COMMENTS:
      return [];
    default:
      return state;
  }
};
