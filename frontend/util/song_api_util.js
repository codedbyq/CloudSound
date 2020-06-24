export const fetchSongs = () => (
    $.ajax({
        method: 'get',
        url: 'api/songs'
    })
);
export const fetchSong = (songId) => (
    $.ajax({
        method: 'get',
        url: `api/songs/${songId}`,
        data: { songId }
    })
);
export const createSong = (song) => (
    $.ajax({
        method: 'post',
        url: 'api/songs',
        data: { song }
    })
);
export const updateSong = (song) => (
    $.ajax({
        method: 'post',
        url: `api/songs/${song.id}`,
        data: { song }
    })
);
export const deleteSong = (songId) => (
    $.ajax({
        method: 'delete',
        url: `api/songs/${songId}`,
        data: { songId }
    })
);
