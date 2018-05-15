import axios from "axios";
import { ADD_FRIEND, REMOVE_FRIEND, FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, SEARCH_USER } from "../actionTypes";

export const fetchUsers = () => async dispatch => {
  dispatch({type: FETCH_USERS_START});

  try {
    const users = await axios.get("https://randomuser.me/api/?results=10&seed=abc");
    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: users.data.results
    });
  } catch (err) {
    dispatch({
      type: FETCH_USERS_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const addFriend = id => {
  return {
    type: ADD_FRIEND,
    id
  };
};

export const removeFriend = id => {
  return {
    type: REMOVE_FRIEND,
    id
  };
};

export const searchUser = value => {
  return {
    type: SEARCH_USER,
    value
  };
};