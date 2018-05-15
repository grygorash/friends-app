import { SEARCH_USER } from "../actionTypes";

const initialState = "";

const users = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USER:
      //   if (state.name.first === action.value) {
      //     return state
      //   } else {
      //     return state;
      //   }

    default:
      return state;
  }
};

export default users;