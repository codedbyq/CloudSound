import { RECEIVE_USER, RECEIVE_USERS } from '../../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        case RECEIVE_USERS:
            return Object.assign({}, newState, action.users);
        case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user;
            return newState;
    
        default:
            return state;
    }
}

export default UsersReducer;