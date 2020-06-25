import { connect } from 'react-redux';
import { createSong } from '../../actions/song_actions';
import SongForm from './song_form';

const mapDispatchToState = dispatch => ({
    createSong: song => dispatch(createSong(song))
});

export default connect(null, mapDispatchToState)(SongForm);