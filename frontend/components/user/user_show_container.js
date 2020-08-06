import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    const userId = ownProps.match.params.userId;
    const user = state.entities.users[userId];

    return {
        user,
        userId
    }
};

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);