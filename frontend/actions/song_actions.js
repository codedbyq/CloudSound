import * as SongAPI from '../util/song_api_util';

export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

const receiveSongs = songs => ({
    type: RECEIVE_SONGS, 
    songs,
});

const receiveSong = song => ({
    type: RECEIVE_SONG,
    song,
});

const removeSong = songId => ({
    type: REMOVE_SONG, 
    songId,
});

export const fetchSongs = () => dispatch => (
    SongAPI.fetchSongs().then(songs => dispatch(receiveSongs(songs)))
);

export const fetchSong = (songId) => dispatch => (
    SongAPI.fetchSong(songId).then(song => dispatch(receiveSong(song)))
);

export const createSong = (song) => dispatch => (
    SongAPI.createSong(song).then(song => dispatch(receiveSong(song)))
);

export const updateSong = song => dispatch => (
    SongAPI.updateSong(song).then(song => dispatch(receiveSong(song)))
);

export const deleteSong = songId => dispatch => (
    SongAPI.deleteSong(songId).then(song => dispatch(removeSong(song.id)))
);