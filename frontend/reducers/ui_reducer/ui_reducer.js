import { combineReducers } from 'redux';
import audioPlayerReducer from './audio_reducer';

const uiReducer = combineReducers({
    nowPlaying: audioPlayerReducer
});

export default uiReducer