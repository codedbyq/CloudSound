import React from 'react';
import PlayButtonContainer from './play_button_container';
import { formatTime, formatDate } from '../../util/util';
import { Link } from 'react-router-dom';

const SongBanner = ({ cover, audio, title, genre, artistId, username, songId, search, history, date }) => {

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
                            <span><Link to={`/users/${artistId}`} id='banner-artist'>{username}</Link></span>
                            <span id='banner-title'>{title}</span>
                        </div>

                        <div className='basic-info'>
                            <span>{formatDate(date)}</span> 
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