import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import SongsReducer from './songs_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    songs: SongsReducer
});

export default EntitiesReducer;