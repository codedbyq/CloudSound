import React from 'react';
import { Link } from 'react-router-dom';

export default function ArtistInfo(props) {
    const artistId = props.artist ? props.artist.id : null;
    const username = props.artist ? props.artist.username : null;
    const bio = props.artist ? props.artist.bio : null;
    const profilePic = props.artist ? (
        <img 
            className='profile-pic' 
            src={props.artist.photoURL} 
            alt="profile-pic"/> ) : null;

    return (
        <div className='artist-info'>
            <div className='artist-photo'>{profilePic}</div>
            <Link to={`/users/${artistId}`} className='artist-info-name'>{username}</Link>
            <span className='artist-info-bio'>{bio}</span>
        </div>
    )
}
