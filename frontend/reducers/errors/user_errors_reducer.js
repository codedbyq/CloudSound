import { RECEIVE_USER_ERRORS } from '../../actions/user_actions';

const UserErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USER_ERRORS:
        newState[userForm] = action.errors;    
        return newState;
    
        default:
            return {};
    
    }
};

export default UserErrorsReducer;