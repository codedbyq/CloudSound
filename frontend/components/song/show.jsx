import React from 'react';

class SongShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchSong(this.props.match.params.songId)
    }
    
    render() {
        return (
            <div>
               <h1>{this.props.song.title}</h1>
               <img src={this.props.song.coverURL} />
            </div>
        )
    }
}

export default SongShow;