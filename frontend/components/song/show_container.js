import { connect } from 'react-redux';
import { fetchSong, deleteSong } from '../../actions/song_actions';
import SongShow from './show';

const mapStateToProps = (state, ownProps) => ({
    song: state.entities.songs[ownProps.match.params.songId]
    });

const mapDispatchToProps = dispatch => ({
    fetchSong: songId => dispatch(fetchSong(songId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongShow);