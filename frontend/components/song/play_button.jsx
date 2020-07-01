import React from 'react';

const PlayButton = ({ }) => {

    handleClick = (e) => {
        e.preventDefault();
        const player = document.getElementById('audio');


        if (playing && currentSong.id === this.props.match.params.songId) {
            togglePlay();
            player.pause();
        } else {
            receiveCurrentSong()
        }
    }

    return (
        <div>

        </div>
    )
}