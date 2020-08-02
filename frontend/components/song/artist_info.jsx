import React from 'react'

export default function ArtistInfo(props) {
    const username = props.artist ? props.artist.username : null;
    const bio = props.artist ? props.artist.bio : null;
    const profilePic = props.artist ? (
        <img src={props.artist.photoURL} alt="profile-pic"/> ) : null;

    return (
        <div className='artist-info'>
            <div className='artist-photo'>{profilePic}</div>
            <span className='artist-info-name'>{username}</span>
            <span className='artist-info-bio'>{bio}</span>
        </div>
    )
}
