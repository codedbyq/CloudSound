import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    user: { email: '', username: '', password: '' },
    formType: 'Sign Up',
    errors: Object.values(state.errors.session),
});

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signup(user)),
    login: user => dispatch(login(user))

});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);