import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    formType: 'Login',
    errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(login(user)),
    demoLogin: () => dispatch(login({ username: 'DemoUser', password: '123456'}))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);