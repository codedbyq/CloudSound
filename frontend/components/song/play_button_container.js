import { receiveCurrentSong, togglePlay } from '../../actions/audio_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PlayButton from './play_button';

const mapStateToProps = (state, ownProps) => ({
    playing: state.ui.audioPlayer.playing,
    currentSong: state.ui.audioPlayer.currentSong,
});

const mapDispatchToProps = dispatch => ({
    receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
    togglePlay: () => dispatch(togglePlay())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayButton));