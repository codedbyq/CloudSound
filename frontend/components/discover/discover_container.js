import { connect } from 'react-redux';
import Discover from './discover';
import { fetchUsers } from '../../actions/user_actions';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    users: state.entities.users,
    songs: Object.values(state.entities.songs)
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);