import React from 'react'

const UserBanner = ({ username, bio, photo }) => {

    const background = {
      backgroundImage: `url(${photo})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    return (
      <div className="user-banner" style={background}>
        <div className="banner-backdrop">
          <div className="user-banner-content">
            <img src={photo} className="banner-profile-pic" />
            <div className="user-info">
              <span className="banner-username">{username}</span>
              <span className="banner-bio">{bio}</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default UserBanner;
