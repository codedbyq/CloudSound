import { connect } from 'react-redux';
import { fetchUser, fetchSong, deleteSong } from '../../actions/song_actions';
import SongShow from './show';

const mapStateToProps = (state, ownProps) => ({
        song: state.entities.songs[ownProps.match.params.songId],
        currentUser: state.session.currentUser
    })

const mapDispatchToProps = dispatch => ({
    fetchSong: songId => dispatch(fetchSong(songId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    deleteSong: songId => dispatch(deleteSong(songId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongShow);