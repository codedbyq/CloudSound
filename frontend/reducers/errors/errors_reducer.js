import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import UserErrorsReducer from './user_errors_reducer';

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    userForm: UserErrorsReducer,
});

export default ErrorsReducer;