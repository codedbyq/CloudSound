import * as CommentAPI from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

export const fetchComments = songId => dispatch => (
    CommentAPI.getComments(songId).then(comments => dispatch(receiveComments(comments)))
);

export const createComment = comment => dispatch => (
    CommentAPI.postComment(comment).then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = comment => dispatch => (
    CommentAPI.destroyComment(comment).then(comment => dispatch(removeComment(comment.id)))
);
