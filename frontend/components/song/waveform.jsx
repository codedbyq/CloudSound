import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class Waveform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playing: false };
    }

    componentDidMount() {
        const audio = document.getElementById('audio');

        this.waveform = WaveSurfer.create({
            container: '#waveform',
            // barWidth: 3,
            // cursorWidth: 1,
            // height: 80,
            // progressColor: '#FF5500',
            // responsive: true,
            // waveColor: '#999999',
            scrollParent: true
        });

        this.waveform.load(audio);
    }

    handlePlay() {
        this.setState({ playing: !this.state.playing });
        this.waveform.playPause();
    }

    render() {
        const audioURL = this.props.audio ? this.props.audio : null;
        const playPause = this.state.playing ? 'Pause' : 'Play'
        return (
            <div>
                <div id='waveform'></div>
                <button>{playPause}</button>
                <audio id='audio' src={audioURL}></audio>
            </div>
        )
    }
}

export default Waveform;