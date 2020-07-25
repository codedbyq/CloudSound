import React from 'react'

export default function ArtistInfo(props) {
    return (
        <div className='artist-info'>
            <div className='artist-profile-pic'></div>
            <span className='artist-info-name'>{props.artist.username}</span>
            <span className='artist-info-bio'>{props.artist.bio}</span>
        </div>
    )
}
