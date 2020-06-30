export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';

export const receiveCurrentSong = song => ({
    type: RECEIVE_CURRENT_SONG,
    song
});

export const togglePlay = () => ({
    type: TOGGLE_PLAY,
});
