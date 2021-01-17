
# [CloudSound][demolink] 
<img src="https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/logo-no-text.png" width="100" height="100">

## Introduction
CloudSound is a clone of [Soundcloud.com][soundcloud], an online community where users can stream music for free or upload music of their own for others to see. CloudSound is a close not only a clone in concept but aesthetic and content, so I do not own any of the logo's or content used.

## Technologies
### Frontend
* React.js
* Redux.js
* Javascript
* SCSS
* HTML5

### Backend
* Ruby on Rails
* JBuilder
* Postgresql

### Hosting 
* Heroku
* AWS 

## Landing Page
The landing page's purpose is to welcome users that are not signed in and provide them with information about the website and provides links to login or sign up.


![alt text][landing]


## User Authentication
**Users are able to sign in, sign up or sign out**
* A full demo account has been provided to login and try all features.
* The form will also display errors if any criteria is not met.


![alt text][userauth]


## Discover
The discover page is the centerpiece of the application. Here, users can browse through different curated playlists and discover new music.

![alt text][discover]

## Upload
CloudSound gives our users the opportunity to upload and share their own music with the rest of the Cloud Community

![alt text][upload]

## Audio Player
Users can explore through the app while listening to a song on our custom audio player, without interuption and without ads.
```
<div className={`${currentSong ? 'audio-popup' : 'hidden'}`}>
   <audio id='audio' src={audio} preload='auto' controls 
       onPlaying={this.handleTimeElapsed} onLoadedMetadata={this.setMetadata}/>
   {playerControls}
   {playerProgress}
   <div className='song-details'>
       <img src={cover} className='audio-player-cover'/>
       {songInfo}
   </div>
</div>
```

![alt text][audio]

---

# Future Provisions

- [x] Comments
  * Users will be able to comment on their favorite songs
- [ ] Follow
  * Users will be able to follow other artists in the community
  * Users will have a feed to see uploads from artists they follow
- [ ] Waveforms
  * Add a new aesthetic element to a song's show page
- [ ] Queue
  * Load the audio player with a queue of songs to play next


[soundcloud]: soundcloud.com
[demolink]: https://cloud-sound.herokuapp.com/#/
[landing]: https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/landing.gif "Landing Page"
[userauth]: https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/userauth.gif "User Auth"
[discover]: https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/discover.gif "Discover Page"
[upload]: https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/upload.gif "Upload"
[audio]: https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/audioplayer.png "Audio Player"
