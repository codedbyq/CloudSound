import { RECEIVE_CURRENT_SONG, TOGGLE_PLAY } from '../../actions/audio_actions';

const _nullState = {
    playing: false,
    currentSong: null
}

const audioPlayerReducer = (state = _nullState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_SONG:
            newState[currentSong] = action.song
            newState[playing] = true;
            return newState;
        case TOGGLE_PLAY:
            newState[playing] = !state.playing;
            return newState;
    
        default:
            state;
    }
}

export default audioPlayerReducer;