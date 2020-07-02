import React from 'react';
import { togglePlay } from '../../actions/audio_actions';

class PlayButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const player = document.getElementById('audio');

        if (this.props.playing) {
            this.props.togglePlay();
            player.pause();
        } else {
            this.props.receiveCurrentSong(this.props.songId);
            this.props.togglePlay();
            player.setAttribute("autoPlay", "");
            player.play();
        }
    }

    render() {
        const symbol = this.props.playing ? 'pause' : 'play'

        return (
            <button className={`banner-${symbol}`} onClick={this.handleClick}>
            </button>
        )
    }
}

export default PlayButton;