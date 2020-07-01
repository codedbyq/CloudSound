import { RECEIVE_CURRENT_SONG, TOGGLE_PLAY } from '../../actions/audio_actions';

const defaultState = {
    playing: false,
    currentSong: null
}

const AudioPlayerReducer = (state = defaultState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_SONG:
            newState.currentSong = action.songId;
            newState.playing = true;
            return newState;
        case TOGGLE_PLAY:
            newState.playing = !state.playing;
            return newState;
    
        default:
            return state;
    }
}

export default AudioPlayerReducer;