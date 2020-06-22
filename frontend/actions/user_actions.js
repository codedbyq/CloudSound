import * as UserAPI from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});
const receiveUser = users => ({
    type: RECEIVE_USERS,
    users
});

export const fetchUser = userId => dispatch => (
    UserAPI.fetchUser(userId).then(user => dispatch(receiveUser(user)))
);

export const fetchUsers = () => dispatch => (
    UserAPI.fetchUsers().then(users => dispatch(receiveUsers(users)))
);

export const createUser = user => dispatch => (
    UserAPI.createUser(user).then(user => dispatch(receiveUser(user)))
);