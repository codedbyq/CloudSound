import { createComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => ({
    songId: ownProps.match.params.songId
});

const mapDispatchToProps = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));