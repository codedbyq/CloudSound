import { combineReducers } from 'redux';
import AudioPlayerReducer from './audio_reducer';

const UIReducer = combineReducers({
    audioPlayer: AudioPlayerReducer
});

export default UIReducer;