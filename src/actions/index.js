import axios from "axios";
import { ADD_FRIEND, REMOVE_FRIEND, FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "../actionTypes";

export const fetchUsers = () => async dispatch => {
  dispatch({type: FETCH_USERS_START});

  try {
    const users = await axios.get("https://randomuser.me/api/?results=10&seed=abc");
    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: Array.from(users.data.results),
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
    id,
    isFriend: false
  };
};

export const removeFriend = id => {
  return {
    type: REMOVE_FRIEND,
    id,
    isFriend: false
  };
};