import React from 'react';

class PlayButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const player = document.getElementById('audio');

        if (this.props.playing) {
            togglePlay();
            player.pause();
        } else {
            this.props.receiveCurrentSong(this.props.songId);
            player.play();
        }
    }

    render() {
        return (
            <button className='banner-play' onClick={this.handleClick}>
                Play
            </button>
        )
    }
}

export default PlayButton;