import { connect } from 'react-redux';
import Landing from './landing';
import { fetchUsers } from '../../actions/user_actions';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    users: Object.values(state.entities.users),
    songs: Object.values(state.entities.songs)
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);