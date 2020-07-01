import { receiveCurrentSong, togglePlay } from '../../actions/audio_actions';
import PlayButton from './play_button';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    playing: state.ui.audioPlayer.playing,
    currentSong: state.entities.songs[state.ui.audioPlayer.currentSong],
});

const mapDispatchToProps = dispatch => ({
    receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
    togglePlay: () => dispatch(togglePlay())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);