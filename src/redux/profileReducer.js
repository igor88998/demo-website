import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'network/profile/ADD_POST';
const SET_USER_PROFILE = 'network/profile/SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'network/profile/TOGGLE_IS_FETCHING';
const SET_STATUS = 'network/profile/SET_STATUS';
const DELETE_POST = 'network/profile/DELETE_POST';

let initialState = {
	postsData: [
		{ id: 1, postName: 'Post 1', userName: 'John', message: 'Hi', likesCount: 20, comments: 4 },
		{ id: 2, postName: 'Post 2', userName: 'Mike', message: 'How is your day?', likesCount: 20, comments: 4 },
		{ id: 3, postName: 'Post 3', userName: 'Alex', message: 'What is your name?', likesCount: 20, comments: 4 },
		{ id: 4, postName: 'Post 4', userName: 'Lana', message: 'What is your name?', likesCount: 20, comments: 4 },
	],

	profile: null,
	status: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				postName: 'Post 5',
				userName: 'Vlad',
				message: action.newPostText,
				likesCount: 0,
				comments: 0,
			};

			return {
				...state,
				postsData: [...state.postsData, newPost],
			};
		}

		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			};
		}

		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile,
			};
		}

		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching };
		}

		case DELETE_POST: {
			return { ...state, postsData: state.postsData.filter((p) => p.id !== action.postId) };
		}

		default:
			return state;
	}
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getUserProfile = (userId) => async (dispatch) => {
	dispatch(toggleIsFetching(true));

	let response = await usersAPI.getUserProfile(userId);
	
	dispatch(toggleIsFetching(false));
	dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getUserStatus(userId);

	dispatch(setStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateUserStatus(status);

	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};

export default profileReducer;
