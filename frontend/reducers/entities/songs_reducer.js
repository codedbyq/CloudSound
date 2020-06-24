import { RECEIVE_SONG, RECEIVE_SONGS, REMOVE_SONG } from '../../actions/song_actions';

const SongsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SONGS:
            return Object.assign({}, newState, action.songs);
        case RECEIVE_SONG:
            newState[action.song.id] = action.song;
            return newState;
        case REMOVE_SONG:
            delete newState[action.songId];
            return newState;
    
        default:
            return state;
    }
}

export default SongsReducer;