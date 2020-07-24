// get all comments for a single song
export const getComments = song_id => (
    $.ajax({
        method: 'get',
        url: `/api/songs/${song_id}/comments`,
        data: { song_id }
    })
);

// post a new comment
export const postComment = comment => (
    $.ajax({
        method: 'post',
        url: `/api/songs/${comment.song_id}/comments`,
        data: { comment }
    })
);

// delete a comment 
export const destroyComment = comment=> (
    $.ajax({
        method: 'delete',
        url: `/api/songs/${comment.song_id}/comments/${comment.id}`,
        data: { comment }
    })
);