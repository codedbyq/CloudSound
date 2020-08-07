import React, { useEffect } from 'react';
import UserBanner from './user_banner';
import UserSongIndexContainer from './user_song_index_container';

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

            <UserSongIndexContainer />
        </div>
    )
};

export default UserShow;