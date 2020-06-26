import React, { useEffect } from 'react';

class SongShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentWillMount() {
        this.props.fetchSong(this.props.match.params.songId);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteSong(this.props.match.params.songId)
            .then(() => this.props.history.push('/'));
    }

    render() {
        const content = this.props.song ? (
            <>
                <h1>{this.props.song.title}</h1>
                <img src={this.props.song.coverURL} />
            </>
        ) : null

        return (
            <div>
               {content}
               <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default SongShow;