import React from 'react';
import WaveSurfer from 'wavesurfer.js';
// import ReactWaveSurfer from 'react-wavesurfer';

class Waveform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playing: false };
    }

    componentDidMount() {
        // const audio = document.getElementById('audio');
        const container = document.getElementById('waveform');

        this.waveform = WaveSurfer.create({
            container: container,
            progressColor: '#FF5500',
            waveColor: '#999999',
            // barWidth: 3,
            // cursorWidth: 1,
            // height: 80,
            // responsive: true,
            // scrollParent: true
        });
        
        this.waveform.load(this.props.audio);
    }

    // handlePlay() {
    //     this.setState({ playing: !this.state.playing });
    //     this.waveform.playPause();
    // }

    render() {
        const audioURL = this.props.audio ? this.props.audio : '';
        const playPause = this.state.playing ? 'Pause' : 'Play'
        return (
            <div>
                <div id='waveform'></div>
                {/* <button>{playPause}</button> */}
                {/* <audio id='audio' src={audioURL}></audio> */}
            </div>
        )
    }
}

export default Waveform;