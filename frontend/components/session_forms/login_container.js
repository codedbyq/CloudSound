import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    user: { email: '', password: ''},
    formType: 'Login',
    errors: Object.values(state.errors.session),
});

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(login(user)),
    login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);