import * as SongAPI from '../util/song_api_util';

export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const RECEIVE_USER_SONGS = "RECEIVE_USER_SONGS";

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

const receiveSongErrors = errors => ({
    type: RECEIVE_SONG_ERRORS,
    errors
});

const receiveUserSongs = songs =>  ({
    type: RECEIVE_USER_SONGS,
    songs
})

export const fetchSongs = () => dispatch => (
    SongAPI.fetchSongs().then(songs => dispatch(receiveSongs(songs)))
);

export const fetchSong = (songId) => dispatch => (
    SongAPI.fetchSong(songId).then(song => {
        dispatch(receiveSong(song))
        return song
    })
);

export const createSong = (song) => dispatch => (
    SongAPI.createSong(song).then(song => { 
        dispatch(receiveSong(song)) 
        return song
    },
        err => dispatch(receiveSongErrors(err.responseJSON))
    )
);

export const updateSong = song => dispatch => (
    SongAPI.updateSong(song).then(song => dispatch(receiveSong(song)),
    err => dispatch(receiveSongErrors(err.responseJSON))
    )
);

export const deleteSong = songId => dispatch => (
    SongAPI.deleteSong(songId).then(song => dispatch(removeSong(song.id)))
);

export const fetchUserSongs = userId => dispatch => (
    SongAPI.fetchUserSongs(userId).then(songs => dispatch(receiveUserSongs(songs)))
)