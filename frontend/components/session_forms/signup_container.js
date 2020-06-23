import { connect } from 'react-redux';
import { signup } from '../../actions/user_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    formType: 'Sign Up',
    errors: state.errors.session,
    user: { email: '', username: '', password: '' }

});

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);