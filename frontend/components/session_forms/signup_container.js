import { connect } from 'react-redux';
import { signup } from '../../actions/user_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    formType: 'Sign Up',
    errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);