import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = state => {
    const currentUserId = state.session.id;
    const user = currentUserId ? state.entities.users[currentUserId] : null;

    return {
        currentUser: user
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);