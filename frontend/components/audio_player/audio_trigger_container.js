import { connect } from 'react-redux'
import AudioTrigger from './audio_trigger';
import { receiveCurrentSong, togglePlay } from '../../actions/audio_actions';

const mapStateToProps = state => ({
    playing: state.ui.audioPlayer.playing,
    currentSong: state.ui.audioPlayer.currentSong
});

const mapDispatchToProps = dispatch => ({
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    togglePlay: () => dispatch(togglePlay())
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioTrigger);