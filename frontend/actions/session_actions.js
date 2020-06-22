import * as SessionAPI from '../util/session_api_utl';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const login = user => dispatch => (
    SessionAPI.postSession(user).then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
    SessionAPI.deleteSession().then(() => dispatch(logoutCurrentUser()))
);