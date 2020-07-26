import { connect } from 'react-redux';
import { fetchSong, deleteSong } from '../../actions/song_actions';
import { fetchUser, } from '../../actions/user_actions';
import { search } from '../../actions/search_actions';
import SongShow from './show';

const mapStateToProps = (state, ownProps) => {
    const song = state.entities.songs[ownProps.match.params.songId];
    const artist = song ? state.entities.users[song.artist_id] : null;
    
    return ({
        song: song,
        artist: artist,
        currentUser: state.session.currentUser,
    });
}

const mapDispatchToProps = dispatch => ({
    fetchSong: songId => dispatch(fetchSong(songId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    deleteSong: songId => dispatch(deleteSong(songId)),
    search: input => dispatch(search(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongShow);