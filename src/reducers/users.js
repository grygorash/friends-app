import { ADD_FRIEND, REMOVE_FRIEND, FETCH_USERS_SUCCESS, SEARCH_USER } from '../actionTypes';
import * as dotProp from 'dot-prop-immutable';

const initialState = {
	users: [],
	searchedValue: '',
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_USERS_SUCCESS:
			return {
				...state, users: action.users
			};
		case ADD_FRIEND:
			const searchedToAdd = state.users.findIndex(user => user.phone === action.user.phone);
			return dotProp.set(state, `users.${searchedToAdd}.isFriend`, true);
		case REMOVE_FRIEND:
			const searchedToRemove = state.users.findIndex(user => user.phone === action.user.phone);
			return dotProp.set(state, `users.${searchedToRemove}.isFriend`, false);
		case SEARCH_USER:
			return {
				...state, searchedValue: action.value
			};

		default:
			return state;
	}
};

