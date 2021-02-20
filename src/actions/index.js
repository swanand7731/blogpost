import {
  FETCH_COMMENTS,
  FETCH_POSTS,
  FETCH_POST,
  FETCH_USER,
  FETCH_USERS,
  REMOVE_COMMENTS,
} from "./types";

import jsonplaceholder from "../apis/JsonPlaceHolder";

export const fetchUsers = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/users");
  dispatch({ type: FETCH_USERS, payload: response.data });
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/posts");
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchPost = (id) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/posts/${id}`);
  dispatch({ type: FETCH_POST, payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchPostUser = (id) => async (dispatch, getState) => {
  await dispatch(fetchPost(id));
  const userId = getState().post.userId;
  await dispatch(fetchUser(userId));
  await dispatch(fetchComments(id));
};

export const fetchPostsUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  await dispatch(fetchUsers());
};

export const fetchComments = (postId) => async (dispatch) => {
  await dispatch(removeComments());
  const response = await jsonplaceholder.get(`/posts/${postId}/comments`);
  dispatch({ type: FETCH_COMMENTS, payload: response.data });
};

export const removeComments = () => {
  return {
    type: REMOVE_COMMENTS,
  };
};
