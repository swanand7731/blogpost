import { FETCH_USER, FETCH_USERS } from "../actions/types";

const INIT = [];

export const usersReducer = (state = INIT, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const singleUserReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
