import * as UserAPI from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});
const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

const receiveErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

export const fetchUser = userId => dispatch => (
    UserAPI.fetchUser(userId).then(user => dispatch(receiveUser(user)))
);

export const fetchUsers = () => dispatch => (
    UserAPI.fetchUsers().then(users => dispatch(receiveUsers(users)))
);


export const signup = user => dispatch => (
    UserAPI.createUser(user).then(user => dispatch(receiveUser(user)),
    err => ( dispatch(receiveErrors(err.responseJSON)))
    )
);