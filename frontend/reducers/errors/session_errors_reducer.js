import { RECEIVE_USER_ERRORS } from '../../actions/user_actions';
import { RECEIVE_SESSION_ERRORS } from '../../actions/session_actions';

const initialState = {
    session: []
}

const SessionErrorsReducer = (state = initialState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return {...state, session: action.errors};
        case RECEIVE_SESSION_ERRORS:
            return { ...state, session: action.errors };
    
        default:
            return state;
    }
}

export default SessionErrorsReducer;