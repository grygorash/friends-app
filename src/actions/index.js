import { ADD_FRIEND, REMOVE_FRIEND } from "../actionTypes";

export const addFriend = (id, firstName, lastName, userPic) => {
  return {
    type: ADD_FRIEND,
    id: id,
    firstName: firstName,
    lastName: lastName,
    userPic: userPic
  };
};
export const removeFriend = (id) => {
  return {
    type: REMOVE_FRIEND,
    id
  };
};