import { connect } from 'react-redux';
import { signup } from '../../actions/user_actions';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    formType: 'Sign Up',
    errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signup(user)),
    demoLogin: () => dispatch(login({ input: 'DemoUser', password: '123456' }))

});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);