import { receiveCurrentSong, togglePlay } from '../../actions/audio_actions';
import PlayButton from './play_button';

const mapStateToProps = (state, ownProps) => ({
    playing: state.ui.audioPlayer.playing,
    currentSong: state.ui.audioPlayer.currentSong
});

const mapDispatchToProps = dispatch => ({
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    togglePlay: () => dispatch(togglePlay())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);