import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import SongsReducer from './songs_reducer';
import SearchReducer from './search_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    songs: SongsReducer,
    search: SearchReducer
});

export default EntitiesReducer;