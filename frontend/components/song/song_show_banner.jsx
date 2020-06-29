import React from 'react';
import Waveform from './waveform';

const SongBanner = ({ cover, audio, title, artist }) => {

    const background = {
        backgroundImage: `url(${cover})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    
    return (
        <div className='song-banner' style={background}>
            <div className='song-banner-backdrop'>
                <div className='banner-content'>
                    <div className='banner-top'>
                        <div className='play-button'></div>
                        <div className='title-container'>
                            <h3 id='banner-artist'>Artist</h3>
                            <h1 id='banner-title'>{title}</h1>
                        </div>
                    </div>

                    {/* <Waveform audio={audio} /> */}
                    <audio className='banner-audio-player' src={audio} 
                    preload='auto' autoPlay controls></audio>
                </div>
                <img className='banner-cover' src={cover} />
            </div>
        </div>
    )
}

export default SongBanner;