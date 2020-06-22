import { RECEIVE_SESSION_ERRORS } from '../../actions/session_actions';


const SessionErrorsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return { ...state, session: action.errors };
    
        default:
            return state;
    }
}

export default SessionErrorsReducer;