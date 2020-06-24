import { connect } from 'react-redux';
import Landing from './landing';
import fetchUsers from '../../actions/user_actions';

const mapStateToProps = state => ({
    currentUser = state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    fetchUsers = () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);