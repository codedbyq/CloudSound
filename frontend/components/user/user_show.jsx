import React, { useEffect } from 'react';
import UserBanner from './user_banner';
import UserSongIndex from './user_song_index';

const UserShow = ({ userId, user, fetchUser }) => {
    useEffect( () => { fetchUser(userId) }, [] );

    const username = user ? user.username : null;
    const bio = user ? user.bio : null;
    const photo = user ? user.photoURL : null;

    return (
        <div>
            <UserBanner 
                username={username}
                photo={photo}
                bio={bio}
            />

            <UserSongIndex />
        </div>
    )
};

export default UserShow;