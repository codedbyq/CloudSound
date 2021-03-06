import React from 'react';
import { Link } from 'react-router-dom';

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { duration: 0, timeElapsed: 0 }
        this.togglePlay = this.togglePlay.bind(this);
        this.handleTimeElapsed = this.handleTimeElapsed.bind(this);
        this.handleProgressBar = this.handleProgressBar.bind(this);
        this.setMetadata = this.setMetadata.bind(this);
    }

    componentDidMount() {
        const audio = document.getElementById('audio');
        audio.volume = 0.2;
    }
    
    togglePlay() {
        const audio = document.getElementById('audio');

        this.props.playing ? audio.pause() : audio.play();
        this.props.togglePlay();
    }

    
    
    handleTimeElapsed() {
        const audio = document.getElementById('audio');
        const progressBar = document.getElementById('progress-bar');
        
        if (!audio.paused) {
            this.playInterval = setInterval(() => {
                progressBar.value = audio.currentTime;
                this.setState({ timeElapsed: audio.currentTime });
            }, 50)
        }
    }
    
    handleProgressBar(e) {
        const audio = document.getElementById('audio');
        audio.currentTime = e.target.value;
        this.setState({ timeElapsed: e.target.value})
    }

    setMetadata() {
        const audio = document.getElementById('audio');
        this.setState({ duration: audio.duration})
    }
    
    formatTime(time) {
        const secs = ~~(time % 60);
        const minutes = ~~(time / 60);
        const seconds = secs < 10 ? `0${secs}` : `${secs}`

        return `${minutes}:${seconds}`;
    }

    render() {
        const {playing, currentSong } = this.props;
        const audio = currentSong ? currentSong.audioURL : null;
        const cover = currentSong ? currentSong.coverURL : null;
        const artist = currentSong ? this.props.artist : null;
        const songInfo = currentSong ? (
            <div className='player-basic-info'>
                <Link id='player-artist' to='/'>{artist.username}</Link>
                <Link id='player-title' to={`/songs/${currentSong.id}`}>{currentSong.title}</Link>
            </div>
        ) : null;
        const symbol = playing ? 'pause' : 'play'
        const playerControls = currentSong ? (
            <div className='player-controls'>
                <button className={`${symbol}-btn`} onClick={this.togglePlay}>
                </button>
            </div>
        ) : null;
        const playerProgress = currentSong ? (
            <div className='player-progress'>
                <span id='time-elapsed'>{this.formatTime(this.state.timeElapsed)}</span>
                <input id='progress-bar' type="range" min='0' defaultValue='0' 
                    max={this.state.duration} onInput={this.handleProgressBar} />
                <span id='duration'>{this.formatTime(this.state.duration)}</span>
            </div>
        ) : null;
        
        return (
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
        )
    }
}

export default AudioPlayer;

