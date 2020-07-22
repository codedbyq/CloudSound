import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { search } from '../../actions/search_actions';
import NavBar from './navbar';

const mapStateToProps = (state) => ({
        currentUser: state.session.currentUser
    });

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    search: input => dispatch(search(input))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));