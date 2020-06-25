import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    user: { email: '', username: '', password: '' },
    formType: 'Sign Up',
    errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signup(user)),
    demoLogin: () => dispatch(login({ input: 'DemoUser', password: '123456' }))

});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);