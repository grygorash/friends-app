import * as R from "ramda";

import { ADD_FRIEND, REMOVE_FRIEND, FETCH_USERS_SUCCESS } from "../actionTypes";

const initialState = [];

const friendList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return R.merge(state, action.payload);
      
      // return state.users[Object.assign(state, action.payload)];

      // return state

    case ADD_FRIEND:
      return state.map(user => {
        if (user.id !== action.id) {
          return user;
        } else {
          user.push({isFriend: true});
        }
      });


    case REMOVE_FRIEND:
      return state.filter(friend => {
        if (friend.id !== action.id) {
          return friend;
        } else {
          return null;
        }
      });
    default:
      return state;
  }
};

export default friendList;