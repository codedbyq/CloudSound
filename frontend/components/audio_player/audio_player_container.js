import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { togglePlay, receiveCurrentSong } from '../../actions/audio_actions';

const mapStateToProps = (state) => ({
    playing: state.ui.audioPlayer.playing,
    currentSong: state.ui.audioPlayer.currentSong
});

const mapDispatchToProps = dispatch => ({
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    togglePlay: () => dispatch(togglePlay())
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);