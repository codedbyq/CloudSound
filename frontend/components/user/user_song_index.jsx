import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { formatTime, formatDate } from '../../util/util';

const UserSongIndex = ({ user, userId, songs, fetchUserSongs }) => {
    useEffect(() => { fetchUserSongs(userId) }, []);

    const username = user ? user.username : null;
    const songIndex = songs ? (
      Object.values(songs).map((song) => (
        <div key={`user-song-${song.id}`} className="user-song">
          <Link to={`/songs/${song.id}`} className="user-song-cover">
            <img src={song.coverURL} height="200px" width="200px" />
          </Link>

          <div className='user-song-content'>
            <div className="user-song-info">
                <Link className="user-song-title" to={`/songs/${song.id}`}>
                {song.title}
                </Link>

                <Link className="user-song-username" to={`/songs/${userId}`}>
                {username}
                </Link>
            </div>
            
            <span>{formatDate(song.created_at)}</span>
          </div>
        </div>
      ))
    ) : (
      <span>{`${username} has no uploaded any songs yet.`}</span>
    );

    return (
      <div className="user-song-index">
        <h1 className="user-song-index-header">Tracks</h1>
        <ul className="user-song-list">{songIndex}</ul>
      </div>
    );
}

export default UserSongIndex;