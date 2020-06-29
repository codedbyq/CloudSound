import { connect } from 'react-redux';
import { createSong } from '../../actions/song_actions';
import SongForm from './song_form';

const mapStateToProps = state => ({
    errors: state.errors.song.song
})

const mapDispatchToState = (dispatch, ownProps) => ({
    createSong: song => dispatch(createSong(song))
});

export default connect(null, mapDispatchToState)(SongForm);