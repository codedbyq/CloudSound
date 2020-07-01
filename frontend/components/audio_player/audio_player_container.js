import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { togglePlay, receiveCurrentSong } from '../../actions/audio_actions';

const mapStateToProps = (state) => {
    const songId = state.ui.audioPlayer.currentSong;
    const currentSong = state.entities.songs[songId] ? state.entities.songs[songId] : null;
    const artist = currentSong ? state.entities.users[currentSong.artist_id] : null;

    return ({
        playing: state.ui.audioPlayer.playing,
        currentSong: currentSong,
        artist: artist
    })
};

const mapDispatchToProps = dispatch => ({
    receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
    togglePlay: () => dispatch(togglePlay())
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);