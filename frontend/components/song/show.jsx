import React from 'react';

class SongShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.songId)
    }
    
    render() {
        return (
            <div>
               Song show page
            </div>
        )
    }
}

export default SongShow;