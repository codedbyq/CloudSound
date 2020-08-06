export const fetchSongs = () => (
    $.ajax({
        method: 'get',
        url: 'api/songs',
    })
);
export const fetchSong = (songId) => (
    $.ajax({
        method: 'get',
        url: `api/songs/${songId}`,
        data: { songId },
    })
);
export const createSong = (song) => (
    $.ajax({
        method: 'post',
        url: 'api/songs',
        data: song,
        contentType: false,
        processData: false
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

export const fetchUserSongs = user_id => (
    $.ajax({
        method: 'get',
        url: `api/users/${user_id}/songs`,
        data: { user_id }
    })
)
