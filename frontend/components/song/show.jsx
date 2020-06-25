import React from 'react';

class SongShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.songId)
    }
    
    render() {
        debugger
        return (
            <div>
               
            </div>
        )
    }
}

export default SongShow;