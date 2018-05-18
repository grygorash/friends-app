import { createSelector } from "reselect";

export const getUsers = state => state.users;
export const getSearchValue = state => state.searchedValue;
export const getLoadingStatus = state => state.loaded;

export const getSearchedUsers = createSelector(getUsers, getSearchValue, (users, searchValue) => {
  return users.filter(user => user.name.first.includes(searchValue) || user.name.last.includes(searchValue));
});

export const getFriends = createSelector(getUsers, (users) => {
  return users.filter(user => user.isFriend);
});