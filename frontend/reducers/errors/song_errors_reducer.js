import { RECEIVE_SONG_ERRORS } from '../../actions/song_actions';


const SongErrorsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SONG_ERRORS:
            return { ...state, song: action.errors };

        default:
            return state;
    }
}

export default SongErrorsReducer;