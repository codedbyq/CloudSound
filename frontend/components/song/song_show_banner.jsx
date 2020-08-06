import React from 'react';
import PlayButtonContainer from './play_button_container';
import { search } from '../../actions/search_actions';
import { Redirect } from 'react-router-dom';

const SongBanner = ({ cover, audio, title, genre, artist, songId, search, history }) => {

    const background = {
        backgroundImage: `url(${cover})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const handleClick = e => {
        e.preventDefault();
        const input = e.target.value;
        search(input).then((res) =>
          history.push(`/search/${input}`));
        
    }

    return (
        <div className='song-banner' style={background}>
            <div className='banner-backdrop'>
                <div className='banner-content'>

                    <div className='banner-top'>
                        <div className='play-button'>
                            <PlayButtonContainer songId={songId} />
                        </div>

                        <div className='title-container'>
                            <span><a href="" id='banner-artist'>{artist}</a></span>
                            <span id='banner-title'>{title}</span>
                        </div>

                        <div className='basic-info'>
                            <span> 2 weeks ago</span> 
                            <button className='genre-btn' value={genre} onClick={handleClick}># {genre}</button> 
                        </div>

                    </div>
                </div>
                <img className='banner-cover' src={cover} />
            </div>
        </div>
    )
}

export default SongBanner;