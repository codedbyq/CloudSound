import { fetchComments, deleteComment, createComment } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import CommentsIndex from './comments_index.jsx';

const mapStateToProps = (state, ownProps) => ({
    comments: Object.values(state.entities.comments),
    users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
    fetchComments: songId => dispatch(fetchComments(songId)),
    deleteComment: comment => dispatch(deleteComment(comment)),
    createComment: comment => dispatch(createComment(comment)),
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsIndex));
