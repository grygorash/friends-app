import { ADD_FRIEND, REMOVE_FRIEND } from "../actionTypes";

const friendList = (state = [], action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return [
        ...state,
        {
          id: action.id,
          firstName: action.firstName,
          lastName: action.lastName,
          userPic: action.userPic,
          isFriend: true
        }
      ];
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