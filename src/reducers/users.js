import { ADD_FRIEND, REMOVE_FRIEND, FETCH_USERS_SUCCESS, SEARCH_USER } from "../actionTypes";

const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return state = action.payload;

    case ADD_FRIEND:
      return state.map(user => {
        if (user.phone !== action.id) {
          return user;
        } else {
          return {...user, isFriend: true};
        }
      });

    case REMOVE_FRIEND:
      return state.map(user => {
        if (user.phone !== action.id) {
          return user;
        } else {
          return {...user, isFriend: false};
        }
      });

    default:
      return state;
  }
};

export default users;