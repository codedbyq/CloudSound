import React from 'react';
import WaveSurfer from 'wavesurfer.js';

const SongBanner = ({ cover, audio, title, artist }) => {

    const background = {
        backgroundImage: `url(${cover})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    
    return (
        <div className='song-banner' style={background}>
            <div className='song-banner-content'>
                <audio className='banner-audio-player' src={audio} controls></audio>
                <div className='banner-basic-info'>
                    <h1 id='banner-title'>{title}</h1>
                    <h3>{artist}</h3>
                </div>
                <img className='banner-cover' src={cover} />
            </div>
        </div>
    )
}

export default SongBanner;