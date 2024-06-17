import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../api/api';

const SET_USER_DATA = 'network/auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'network/auth/SET_CAPTCHA_URL';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
		case SET_CAPTCHA_URL:
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuth },
});

export const setCaptchaUrl = (captchaUrl) => ({ type: SET_CAPTCHA_URL, payload: { captchaUrl } });

export const getAuthUserData = () => async (dispatch) => {
	let response = await authAPI.me();

	if (response.data.resultCode === 0) {
		let { id, email, login } = response.data.data;
		dispatch(setAuthUserData(id, email, login, true));
	}
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe, captcha);

	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData());
	} else if (response.data.resultCode === 10) {
		dispatch(getCaptcha());
		let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
		dispatch(stopSubmit('login', { _error: message }));
	} else {
		let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
		dispatch(stopSubmit('login', { _error: message }));
	}
};

export const getCaptcha = () => async (dispatch) => {
	let response = await securityAPI.getCaptchaUrl();
	
	if (response.data.url) {
		dispatch(setCaptchaUrl(response.data.url));
	}
};

export const logout = () => async (dispatch) => {
	let response = await authAPI.logout();

	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
};

export default authReducer;
