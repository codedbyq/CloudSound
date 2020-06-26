import React, { useEffect } from 'react';

class SongShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { song: this.props.song };
    }

    componentWillMount() {
        this.props.fetchSong(this.props.match.params.songId);
    }

    render() {
        console.log(this.props.song);

        return (
            <div>
               <h1>{this.props.song.title}</h1>
               <img className='cover-art' src={this.props.song.coverURL} />
            </div>
        )
    }
}

export default SongShow;