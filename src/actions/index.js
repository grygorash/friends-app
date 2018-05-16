import axios from "axios";
import {
  ADD_FRIEND,
  REMOVE_FRIEND,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_LOCAL_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SEARCH_USER
} from "../actionTypes";

export const fetchUsers = () => async dispatch => {
  dispatch({type: FETCH_USERS_START});
  try {
    const users = await axios.get("https://randomuser.me/api/?results=30&seed=abc");
    const localUsers = JSON.parse(localStorage.getItem("users"));
    if (!localStorage.getItem("users")) {
      dispatch({
        type: FETCH_USERS_SUCCESS,
        users: users.data.results
      });
    } else {
      dispatch({
        type: FETCH_LOCAL_USERS_SUCCESS,
        users: localUsers
      });
    }
  }
  catch (err) {
    dispatch({
      type: FETCH_USERS_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const addFriend = user => {
  return {
    type: ADD_FRIEND,
    user
  };
};

export const removeFriend = user => {
  return {
    type: REMOVE_FRIEND,
    user
  };
};

export const searchUser = value => {
  return {
    type: SEARCH_USER,
    value
  };
};