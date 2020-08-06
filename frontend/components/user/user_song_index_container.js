import { connect } from 'react-redux';
import { fetchUserSongs } from '../../actions/song_actions';
import UserSongIndex from './user_song_index';

const mapStateToProps = (state, ownProps) => ({
    userId: ownProps.match.params.userId,
    songs: state.entities.songs
});

const mapDispatchToProps = dispatch => ({
    fetchUserSongs: userId => dispatch(fetchUserSongs(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSongIndex);