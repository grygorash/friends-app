import axios from "axios";
import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_LOCAL_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  ADD_FRIEND,
  REMOVE_FRIEND,
  SEARCH_USER, ADD_FAVE_FRIEND, REMOVE_FAVE_FRIEND
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

export const addFaveFriend = user => {
  return {
    type: ADD_FAVE_FRIEND,
    user
  };
};

export const removeFriend = user => {
  return {
    type: REMOVE_FRIEND,
    user
  };
};

export const removeFaveFriend = user => {
  return {
    type: REMOVE_FAVE_FRIEND,
    user
  };
};

export const searchUser = value => {
  return {
    type: SEARCH_USER,
    value
  };
};