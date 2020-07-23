import React from 'react';

class PlayButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const player = document.getElementById('audio');

        if (this.props.playing && this.props.currentSong === parseInt(this.props.match.params.songId)) {
            this.props.togglePlay();
            player.pause();
        } else if (this.props.playing && this.props.currentSong !== parseInt(this.props.match.params.songId)) {
            this.props.togglePlay();
            player.pause();
            
            this.props.receiveCurrentSong(this.props.songId);
            this.props.togglePlay();
            player.setAttribute("autoPlay", "");
            player.play();
        } else {
            this.props.receiveCurrentSong(this.props.songId);
            this.props.togglePlay();
            player.setAttribute("autoPlay", "");
            player.play();
        }
    }

    render() {
        let symbol;
        if (this.props.playing && this.props.currentSong === parseInt(this.props.match.params.songId)) {
            symbol = 'pause';
        } else {
            symbol = 'play';
        }

        return (
            <button className={`banner-${symbol}`} onClick={this.handleClick}>
            </button>
        )
    }
}

export default PlayButton;