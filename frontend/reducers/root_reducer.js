import { combineReducers } from 'redux';
import EntitiesReducer from './entities/entities_reducer';
import SessionReducer from './session/session_reducer';
import ErrorsReducer from './errors/session_errors_reducer';

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    errors: ErrorsReducer
});

export default RootReducer;