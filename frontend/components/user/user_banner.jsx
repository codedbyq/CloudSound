import React from 'react'

const UserBanner = ({ username, bio, photo }) => {

    const background = {
      backgroundImage: `url(${photo})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    return (
        <div className='user-banner' style={background}>
            <div className='user-banner-content'>
                <img src={photo} className='banner-profile-pic'/>
                <div>
                    <span>{username}</span>
                    <p>{bio}</p>
                </div>
            </div>
        </div>
    )
}

export default UserBanner;
