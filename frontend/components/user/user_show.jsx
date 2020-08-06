import React, { useEffect } from 'react'
import UserBanner from './user_banner'

const UserShow = ({ userId, user, fetchUser }) => {
    useEffect( () => { fetchUser(userId) }, [] );

    return (
        <div>
           { user ? user.username : 'User' }
        </div>
    )
};

export default UserShow;