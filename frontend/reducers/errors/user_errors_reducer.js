import { RECEIVE_USER_ERRORS } from '../../actions/user_actions';

const initialState = {
    userForm = []
}

const UserErrorsReducer = (state = initialState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return {...state, userForm: action.errors};
    
        default:
            return state;
    }
};

export default UserErrorsReducer;